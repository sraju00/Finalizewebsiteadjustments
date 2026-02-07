import { useState } from 'react';
import { IntakeGateway } from './IntakeGateway';
import { SellerIntakeForm } from './SellerIntakeForm';
import { BuyerIntakeForm } from './BuyerIntakeForm';
import { LoanIntakeForm } from './LoanIntakeForm';

export function IntakeGatewayPage() {
  const [activeForm, setActiveForm] = useState<'seller' | 'buyer' | 'loan' | null>(null);

  return (
    <>
      <IntakeGateway
        onSelectSeller={() => setActiveForm('seller')}
        onSelectBuyer={() => setActiveForm('buyer')}
        onSelectLoan={() => setActiveForm('loan')}
      />

      {/* Modals */}
      {activeForm === 'seller' && (
        <SellerIntakeForm onClose={() => setActiveForm(null)} />
      )}
      {activeForm === 'buyer' && (
        <BuyerIntakeForm onClose={() => setActiveForm(null)} />
      )}
      {activeForm === 'loan' && (
        <LoanIntakeForm onClose={() => setActiveForm(null)} />
      )}
    </>
  );
}
