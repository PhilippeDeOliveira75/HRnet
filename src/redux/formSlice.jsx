import { createSlice } from '@reduxjs/toolkit';

// Fonction pour charger l'état depuis localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('formValues');
    return serializedState ? JSON.parse(serializedState) : { users: [] };
  } catch (err) {
    console.error('Erreur lors du chargement de l’état depuis localStorage:', err);
    return { users: [] };
  }
};

// Fonction pour sauvegarder l'état dans localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('formValues', serializedState);
  } catch (err) {
    console.error('Erreur lors de la sauvegarde de l’état dans localStorage:', err);
  }
};

const initialState = loadState();

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    // Action avec persistance dans localStorage
    addUser: (state, action) => {
      if (!Array.isArray(state.users)) {
        state.users = [];
      }
      state.users.push(action.payload);
      saveState(state);
    },
    
    // Action sans persistance dans localStorage
    addUserNoPersist: (state, action) => {
      if (!Array.isArray(state.users)) {
        state.users = [];
      }
      state.users.push(action.payload);
    },
  },
});

// Exportation des actions
export const { addUser, addUserNoPersist } = formSlice.actions;

// Exportation du reducer
export default formSlice.reducer;
