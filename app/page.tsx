import Stripe from "stripe"

const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion:'2023-08-16'
  })
  const products = await stripe.products.list();

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {

      const prices = await stripe.prices.list({product: product.id})
    })
  )

}



export default async function Home(){
  const products = await getProducts();
  return(
    <main>
      <h1>Hello</h1>
    </main>
  )
}