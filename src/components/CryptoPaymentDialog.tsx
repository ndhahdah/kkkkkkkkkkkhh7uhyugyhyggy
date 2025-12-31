import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from "qrcode.react";

interface CryptoPaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tierTitle: string;
  tierPrice: string;
}

const cryptoWallets = {
  bitcoin: {
    address: "bc1qg0k0ep9sh95396uvzh0g8k3f28dtq39nv7ytv2",
    symbol: "BTC",
    name: "Bitcoin",
    icon: "₿",
  },
  ethereum: {
    address: "0x7Ad8a1B59fD4d40646B850469E48E87Cd99640a7",
    symbol: "ETH",
    name: "Ethereum",
    icon: "Ξ",
  },
  solana: {
    address: "BQ7izRiHyT2YoWkYjBc86FH3QmtjepP55RA77JTdmdPu",
    symbol: "SOL",
    name: "Solana",
    icon: "◎",
  },
};

const CryptoPaymentDialog = ({
  open,
  onOpenChange,
  tierTitle,
  tierPrice,
}: CryptoPaymentDialogProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState<keyof typeof cryptoWallets>("bitcoin");
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const { toast } = useToast();

  // Timer countdown
  useEffect(() => {
    if (!open) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  // Reset timer when dialog opens
  useEffect(() => {
    if (open) {
      setTimeLeft(3600);
      setCopied(false);
    }
  }, [open]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const currentWallet = cryptoWallets[selectedCrypto];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentWallet.address);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Wallet address copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not copy address.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-black text-white border-border">
        <DialogHeader className="sr-only">
          <DialogTitle>Crypto Payment</DialogTitle>
          <DialogDescription>Complete your payment</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Crypto Selection */}
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(cryptoWallets).map(([key, crypto]) => (
              <button
                key={key}
                onClick={() => setSelectedCrypto(key as keyof typeof cryptoWallets)}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                  selectedCrypto === key
                    ? "border-primary bg-primary/10"
                    : "border-border bg-background hover:border-primary/50"
                }`}
              >
                <span className="text-2xl">{crypto.icon}</span>
                <span className="font-medium">{crypto.name}</span>
              </button>
            ))}
          </div>

          {/* Amount in USD */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Amount in USD:</label>
            <div className="p-4 rounded-lg border border-border bg-background">
              <span className="text-2xl font-bold text-primary">{tierPrice}</span>
            </div>
          </div>

          {/* Amount in Cryptocurrency */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Amount in Cryptocurrency:</label>
            <div className="p-4 rounded-lg border border-border bg-background">
              <span className="text-2xl font-bold text-primary">
                Contact support for exact amount
              </span>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Wallet Address:</label>
            <div className="flex items-center gap-2">
              <div className="flex-1 p-3 rounded-lg border border-border bg-background font-mono text-sm break-all">
                {currentWallet.address}
              </div>
              <Button
                size="icon"
                onClick={copyToClipboard}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-xs italic text-muted-foreground">
              Send the exact amount to this address. Transactions are irreversible.
            </p>
          </div>

          {/* QR Code */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">QR Code:</label>
            <div className="flex justify-center p-6 rounded-lg border border-border bg-white">
              <QRCodeSVG value={currentWallet.address} size={200} />
            </div>
          </div>

          {/* Payment Expires */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Payment Expires In:</label>
            <div className="p-4 rounded-lg bg-muted text-center">
              <span className="text-3xl font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CryptoPaymentDialog;
