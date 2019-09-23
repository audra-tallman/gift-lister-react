import React from 'react'
import Footer from './Footer'
import GiftForm from '../containers/GiftForm'
import VisibleGiftList from '../containers/VisibleGiftList'

const ShoppingList = () => (
  <div>
    <GiftForm />
    <VisibleGiftList />
    <Footer />
  </div>
)

export default ShoppingList;
