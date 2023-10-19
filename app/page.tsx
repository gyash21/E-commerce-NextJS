import Stripe from "stripe"

const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:'2023-08-16'
  })
  const products = await stripe.products.list();

  

}



export default async function Home(){
  const products = await getProducts();
  return(
    <main>
      <h1>Hello</h1>
    </main>
  )
}