// app/checkout/[id]/page.tsx
import { fetchCarById } from "@/hooks/carsOnSale";

import MainContent from "@/components/MainContent/MainContent";
import ClientCheckout from "./ClientCheckout";

const CheckoutPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarById(params.id); 

  return (
    <MainContent>
      <ClientCheckout car={car} />
    </MainContent>
  );
};

export default CheckoutPage;
