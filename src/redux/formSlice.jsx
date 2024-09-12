import { createSlice } from '@reduxjs/toolkit'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('formValues')
    return serializedState ? JSON.parse(serializedState) : { users: [] }
  } catch (err) {
    console.error('Erreur lors du chargement de l’état depuis localStorage:', err)
    return { users: [] }
  }
}

const saveState = (state) => {
  try {
    const plainState = JSON.parse(JSON.stringify(state))
    const serializedState = JSON.stringify(plainState)
    localStorage.setItem('formValues', serializedState)
  } catch (err) {
    console.error('Erreur lors de la sauvegarde de l’état dans localStorage:', err)
  }
}

const initialState = loadState()

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (!Array.isArray(state.users)) {
        state.users = []
      }
      state.users.push(action.payload)
      saveState(state)
    },
  },
})

export const { addUser } = formSlice.actions

export default formSlice.reducer