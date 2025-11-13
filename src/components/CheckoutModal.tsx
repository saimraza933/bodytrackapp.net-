import React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "./ui/dialog";
import CheckoutForm from "./CheckoutForm";

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="w-[95vw] max-w-lg max-h-[95vh] overflow-hidden p-0">
          <CheckoutForm product={product} onClose={onClose} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CheckoutModal;