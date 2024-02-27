import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {
  const [prendas, setPrendas] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        let collectionRef = db.collection('Items'); // Utiliza directamente db


      if (categoryId) {
        collectionRef = collectionRef.where('categoria', '==', categoryId);
      }

      const unsubscribe = collectionRef.onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPrendas(data);
      }, (error) => {
        console.error('Error al obtener datos:', error);
      });

      // Limpia la suscripción al desmontar el componente
      return () => unsubscribe();
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList prendas={prendas} />
    </div>
  );
};

export default ItemListContainer;
