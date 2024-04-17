import Image from 'next/image'
import Button from './components/button';
import Card from './components/card';
import Listdata from './components/listdata';

export default function Home() {

  return (
    <main className="flex min-h-sceen flex-col items-center justify-between p-24">
      <Listdata/>
      <h1>TEST SERVER RENDERING</h1>
      <h2>TEST CARD</h2>
    <Button/>
    </main>
  )
}