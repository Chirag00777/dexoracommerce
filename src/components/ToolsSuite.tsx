import React, { useState, useRef, useEffect } from 'react';
import { 
  Printer, 
  Download, 
  RotateCw, 
  Crop, 
  Sliders, 
  Calculator, 
  ListOrdered, 
  HelpCircle, 
  Upload, 
  Check, 
  Sparkles, 
  FileText, 
  AlertCircle,
  TrendingUp,
  Percent,
  RefreshCw,
  Copy,
  Scissors
} from 'lucide-react';
import { MarketplaceLogo } from './MarketplaceLogo';

export const ToolsSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cropper' | 'calculator' | 'skuCounter' | 'fees'>('cropper');

  // -------------------------------------------------------------
  // TOOL 1: LABEL CROPPER STATE
  // -------------------------------------------------------------
  const [selectedMarketplace, setSelectedMarketplace] = useState<'flipkart' | 'amazon' | 'meesho' | 'custom'>('flipkart');
  const [cropPreset, setCropPreset] = useState<'topHalf' | 'bottomHalf' | 'standard4x6' | 'full'>('topHalf');
  const [rotation, setRotation] = useState<number>(0);
  const [highContrast, setHighContrast] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const printCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate an authentic synthetic demo label for immediate testing
  const generateSampleLabel = (type: 'flipkart' | 'amazon' | 'meesho') => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1130; // A4 aspect ratio representation
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // White background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Label border
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, 760, 520); // Top Half = Shipping Label

    // Header Marketplace
    ctx.fillStyle = type === 'flipkart' ? '#2874F0' : type === 'amazon' ? '#FF9900' : '#E42575';
    ctx.font = 'bold 28px sans-serif';
    const brandName = type === 'flipkart' ? 'FLIPKART LOGISTICS' : type === 'amazon' ? 'AMAZON SHIPPING (ATS)' : 'MEESHO VALMO';
    ctx.fillText(brandName, 40, 65);

    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(type === 'flipkart' ? 'PREPAID - STANDARD' : 'COD: ₹1,299.00', 440, 65);

    // Barcode mock
    ctx.fillStyle = '#000000';
    let x = 50;
    for (let i = 0; i < 48; i++) {
      const w = (i % 3 === 0 ? 6 : i % 2 === 0 ? 3 : 1) * 2;
      ctx.fillRect(x, 90, w, 65);
      x += w + 4;
    }
    ctx.font = '16px monospace';
    ctx.fillText('AWB: FMPC' + Math.floor(100000000 + Math.random() * 900000000), 260, 175);

    // Routing / Sort Code
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(40, 190, 720, 70);
    ctx.strokeStyle = '#CBD5E1';
    ctx.strokeRect(40, 190, 720, 70);
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('DEL / AGR-HUB-04', 60, 240);
    ctx.font = '16px sans-serif';
    ctx.fillText('PIN: 282001', 580, 240);

    // Ship To & Seller Info
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('DELIVER TO:', 50, 290);
    ctx.font = '14px sans-serif';
    ctx.fillText('Rohan Verma', 50, 315);
    ctx.fillText('Flat 402, Shanti Heights, Sanjay Place', 50, 335);
    ctx.fillText('Agra, Uttar Pradesh, 282001', 50, 355);
    ctx.fillText('Contact: 98765XXXXX', 50, 375);

    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('SOLD BY (SELLER):', 440, 290);
    ctx.font = '14px sans-serif';
    ctx.fillText('Dexora Commerce Seller Store', 440, 315);
    ctx.fillText('GSTIN: 09AAACE1234F1Z5', 440, 335);
    ctx.fillText('Order ID: OD' + Math.floor(10000000000 + Math.random() * 90000000000), 440, 355);

    // SKU Box
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(40, 400, 720, 35);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('SKU: LEATHER-OXFORD-BRN-8 | QTY: 1 | SIZE: UK 8', 60, 423);

    ctx.fillStyle = '#64748B';
    ctx.font = '12px monospace';
    ctx.fillText('Declaration: For eCommerce fulfillment only. Thermal 4x6 standard.', 50, 470);

    // CUT LINE / SEPARATOR
    ctx.strokeStyle = '#94A3B8';
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(20, 560);
    ctx.lineTo(780, 560);
    ctx.stroke();
    ctx.setLineDash([]);

    // BOTTOM HALF = INVOICE (This is what sellers need removed to avoid thermal paper waste!)
    ctx.fillStyle = '#64748B';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('✂ CUT HERE - TAX INVOICE / RETAIL INVOICE (DO NOT PRINT ON THERMAL 4x6)', 120, 555);

    ctx.strokeStyle = '#E2E8F0';
    ctx.strokeRect(40, 600, 720, 480);
    ctx.fillStyle = '#334155';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('TAX INVOICE / BILL OF SUPPLY', 230, 640);
    ctx.font = '14px sans-serif';
    ctx.fillText('Invoice No: EH/2026/0892', 60, 680);
    ctx.fillText('Date: 21-09-2026', 580, 680);

    // Item Table
    ctx.fillStyle = '#F1F5F9';
    ctx.fillRect(60, 710, 680, 30);
    ctx.fillStyle = '#0F172A';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Description', 80, 730);
    ctx.fillText('Unit Price', 420, 730);
    ctx.fillText('GST (18%)', 540, 730);
    ctx.fillText('Total', 660, 730);

    ctx.font = '13px sans-serif';
    ctx.fillText('Men Oxford Leather Shoes - Brown', 80, 770);
    ctx.fillText('₹1,100.85', 420, 770);
    ctx.fillText('₹198.15', 540, 770);
    ctx.fillText('₹1,299.00', 660, 770);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#64748B';
    ctx.fillText('This is a computer generated invoice and does not require physical signature.', 150, 1040);

    setImageSrc(canvas.toDataURL('image/png'));
    setSelectedMarketplace(type);
  };

  // Load sample Flipkart label on first mount so tool is visually ready
  useEffect(() => {
    generateSampleLabel('flipkart');
  }, []);

  // Render cropped canvas whenever imageSrc, cropPreset, rotation, or highContrast changes
  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      renderCroppedCanvas(img);
    };
  }, [imageSrc, cropPreset, rotation, highContrast, selectedMarketplace]);

  const renderCroppedCanvas = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    const printCanvas = printCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Calculate crop boundary based on preset
    let sx = 0;
    let sy = 0;
    let sWidth = img.width;
    let sHeight = img.height;

    if (cropPreset === 'topHalf') {
      // Standard Flipkart / Amazon A4 page where top 48% is the shipping label
      sy = 0;
      sHeight = img.height * 0.49;
    } else if (cropPreset === 'bottomHalf') {
      sy = img.height * 0.50;
      sHeight = img.height * 0.50;
    } else if (cropPreset === 'standard4x6') {
      // 4x6 proportion from top
      sy = 0;
      sHeight = Math.min(img.height, (img.width * 6) / 4);
    }

    // Target dimensions for 4x6 aspect ratio (e.g., 600 x 900)
    const targetW = 600;
    const targetH = 900;

    canvas.width = targetW;
    canvas.height = targetH;

    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, targetW, targetH);

    ctx.save();
    // Handle rotation
    if (rotation !== 0) {
      ctx.translate(targetW / 2, targetH / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(img, sx, sy, sWidth, sHeight, -targetW / 2, -targetH / 2, targetW, targetH);
    } else {
      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, targetW, targetH);
    }
    ctx.restore();

    // High-Contrast Barcode Sharpening Filter for Thermal Heads
    if (highContrast) {
      const imageData = ctx.getImageData(0, 0, targetW, targetH);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        // Binarize / high-contrast threshold
        const val = avg < 165 ? 0 : 255;
        data[i] = val;     // R
        data[i + 1] = val; // G
        data[i + 2] = val; // B
      }
      ctx.putImageData(imageData, 0, 0);
    }

    // Also mirror to hidden high-res print canvas for 100mm x 150mm printing
    if (printCanvas) {
      printCanvas.width = targetW;
      printCanvas.height = targetH;
      const printCtx = printCanvas.getContext('2d');
      if (printCtx) {
        printCtx.drawImage(canvas, 0, 0);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target?.result as string);
      setIsProcessing(false);
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadCropped = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `dexora-thermal-label-${selectedMarketplace}-4x6.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleDirectPrint = () => {
    window.print();
  };

  // -------------------------------------------------------------
  // TOOL 2: E-COMMERCE PROFIT CALCULATOR STATE
  // -------------------------------------------------------------
  const [calcMarketplace, setCalcMarketplace] = useState<'flipkart' | 'amazon' | 'meesho' | 'shopsy'>('flipkart');
  const [sellingPrice, setSellingPrice] = useState<number>(899);
  const [productCost, setProductCost] = useState<number>(320);
  const [shippingCost, setShippingCost] = useState<number>(65);
  const [packagingCost, setPackagingCost] = useState<number>(18);
  const [referralPercent, setReferralPercent] = useState<number>(12); // commission %
  const [fixedClosingFee, setFixedClosingFee] = useState<number>(25);
  const [gstRatePercent, setGstRatePercent] = useState<number>(12); // product GST %
  const [returnRatePercent, setReturnRatePercent] = useState<number>(15); // RTO/Customer return %
  const [adSpendPerOrder, setAdSpendPerOrder] = useState<number>(45);
  const [dailyOrderCount, setDailyOrderCount] = useState<number>(35);

  // Preset update based on marketplace
  const handleMarketplaceChange = (m: 'flipkart' | 'amazon' | 'meesho' | 'shopsy') => {
    setCalcMarketplace(m);
    if (m === 'meesho') {
      setReferralPercent(0); // 0% commission on Meesho
      setFixedClosingFee(0);
      setShippingCost(55);
    } else if (m === 'amazon') {
      setReferralPercent(13.5);
      setFixedClosingFee(32);
      setShippingCost(72);
    } else if (m === 'flipkart') {
      setReferralPercent(11.5);
      setFixedClosingFee(26);
      setShippingCost(65);
    } else if (m === 'shopsy') {
      setReferralPercent(0);
      setFixedClosingFee(15);
      setShippingCost(50);
    }
  };

  // Calculations
  const marketplaceCommission = (sellingPrice * referralPercent) / 100;
  const marketplaceTotalFee = marketplaceCommission + fixedClosingFee;
  const gstOnMarketplaceFees = marketplaceTotalFee * 0.18; // 18% GST on platform services
  const netGstLiability = Math.max(0, (sellingPrice * (gstRatePercent / 100)) - (productCost * (gstRatePercent / 100)));

  // Return Loss Allocation: If 15% return rate, reverse shipping penalty ~₹65
  const returnLossAllocation = (returnRatePercent / 100) * (shippingCost * 1.5 + packagingCost);

  const totalDeductions = productCost + packagingCost + shippingCost + marketplaceTotalFee + gstOnMarketplaceFees + netGstLiability + returnLossAllocation + adSpendPerOrder;
  const netProfitPerUnit = Math.round(sellingPrice - totalDeductions);
  const netMarginPercent = ((netProfitPerUnit / sellingPrice) * 100).toFixed(1);
  const monthlyProjectedProfit = Math.round(netProfitPerUnit * dailyOrderCount * 30);
  const breakevenPrice = Math.round(totalDeductions + 10);

  // -------------------------------------------------------------
  // TOOL 3: SKU COUNTER & PACKING PICK-LIST STATE
  // -------------------------------------------------------------
  const [skuInputText, setSkuInputText] = useState<string>(
    `SHOE-OXFORD-BRN-8, 4\nSHOE-OXFORD-BLK-9, 6\nKURTI-COTTON-RED-M, 12\nKURTI-COTTON-BLU-L, 8\nWALLET-LEATHER-BRN, 5\nSHOE-OXFORD-BRN-8, 3\nKURTI-COTTON-RED-M, 4`
  );

  const parsedSkuList = React.useMemo(() => {
    const map = new Map<string, number>();
    const lines = skuInputText.split('\n');
    lines.forEach((line) => {
      if (!line.trim()) return;
      const parts = line.split(/[,\t|]/);
      const sku = parts[0]?.trim() || '';
      const qtyStr = parts[1]?.trim();
      const qty = qtyStr && !isNaN(Number(qtyStr)) ? Number(qtyStr) : 1;
      if (sku) {
        map.set(sku, (map.get(sku) || 0) + qty);
      }
    });

    const list: { sku: string; quantity: number }[] = [];
    map.forEach((quantity, sku) => {
      list.push({ sku, quantity });
    });
    return list.sort((a, b) => b.quantity - a.quantity);
  }, [skuInputText]);

  const totalUnitsToPick = parsedSkuList.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleCopySkuList = () => {
    const text = parsedSkuList.map((item) => `${item.sku}: ${item.quantity} pcs`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedNotification('Copied pick-list to clipboard!');
    setTimeout(() => setCopiedNotification(null), 2500);
  };

  return (
    <section id="free-tools-section" className="py-16 sm:py-20 bg-slate-100/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>100% Free Browser-Based Seller Tools</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Built for Indian Marketplace Workflows
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            No signup required. All processing happens safely and privately inside your browser. No files are ever uploaded to an external server.
          </p>
        </div>

        {/* Tools Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            id="tab-cropper"
            onClick={() => setActiveTab('cropper')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'cropper'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Thermal 4x6 Label Cropper</span>
            <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
              Popular
            </span>
          </button>

          <button
            id="tab-calculator"
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'calculator'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Marketplace Profit & ROI Calculator</span>
          </button>

          <button
            id="tab-sku-counter"
            onClick={() => setActiveTab('skuCounter')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'skuCounter'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <ListOrdered className="w-4 h-4" />
            <span>Order SKU Counter & Pick-List</span>
          </button>

          <button
            id="tab-fees"
            onClick={() => setActiveTab('fees')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'fees'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Percent className="w-4 h-4" />
            <span>Fee & Commission Cheat Sheet</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: THERMAL 4X6 SHIPPING LABEL CROPPER                       */}
        {/* ============================================================== */}
        {activeTab === 'cropper' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800">
              <div>
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span>Shipping Label Cropper for Thermal Printers</span>
                  <span className="text-xs bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded border border-indigo-400/40">
                    4x6 Inch (100mm × 150mm)
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Removes tax invoice & blank borders from Flipkart, Amazon, and Meesho dispatch sheets.
                </p>
              </div>

              {/* Sample Buttons for 1-Click Try */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-slate-400 mr-1 hidden md:inline">Try Demo:</span>
                <button
                  id="btn-sample-flipkart"
                  onClick={() => generateSampleLabel('flipkart')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    selectedMarketplace === 'flipkart'
                      ? 'bg-blue-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <MarketplaceLogo id="flipkart" size="xs" />
                  <span>Flipkart Label</span>
                </button>
                <button
                  id="btn-sample-amazon"
                  onClick={() => generateSampleLabel('amazon')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    selectedMarketplace === 'amazon'
                      ? 'bg-amber-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <div className="bg-white rounded p-0.5"><MarketplaceLogo id="amazon" size="xs" /></div>
                  <span>Amazon ATS</span>
                </button>
                <button
                  id="btn-sample-meesho"
                  onClick={() => generateSampleLabel('meesho')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    selectedMarketplace === 'meesho'
                      ? 'bg-pink-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <MarketplaceLogo id="meesho" size="xs" />
                  <span>Meesho Label</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Work Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Control Panel */}
              <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/70 space-y-5">
                
                {/* File Upload Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Upload Your PDF / Image Label
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-indigo-500 bg-white rounded-xl p-4 text-center cursor-pointer transition-colors group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Upload className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 mx-auto mb-1.5 transition-colors" />
                    <span className="text-xs font-bold text-slate-800 block">
                      Click to choose file or drag here
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Supports PNG, JPG, WebP (or use samples above)
                    </span>
                  </div>
                </div>

                {/* Preset Crop Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Crop Preset (Indian Marketplaces)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCropPreset('topHalf')}
                      className={`p-2.5 rounded-lg text-xs font-bold border text-left transition-all ${
                        cropPreset === 'topHalf'
                          ? 'bg-indigo-50 text-indigo-900 border-indigo-500 ring-1 ring-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span>Top 50% Crop</span>
                        <Crop className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-normal block">
                        Removes bottom Tax Invoice (Flipkart/Shopsy)
                      </span>
                    </button>

                    <button
                      onClick={() => setCropPreset('standard4x6')}
                      className={`p-2.5 rounded-lg text-xs font-bold border text-left transition-all ${
                        cropPreset === 'standard4x6'
                          ? 'bg-indigo-50 text-indigo-900 border-indigo-500 ring-1 ring-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span>4x6 Proportional</span>
                        <FileText className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-normal block">
                        Amazon ATS & Meesho standard thermal fit
                      </span>
                    </button>

                    <button
                      onClick={() => setCropPreset('bottomHalf')}
                      className={`p-2.5 rounded-lg text-xs font-bold border text-left transition-all ${
                        cropPreset === 'bottomHalf'
                          ? 'bg-indigo-50 text-indigo-900 border-indigo-500 ring-1 ring-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span>Bottom Half Only</span>
                        <FileText className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-normal block">
                        Extract customer invoice when needed
                      </span>
                    </button>

                    <button
                      onClick={() => setCropPreset('full')}
                      className={`p-2.5 rounded-lg text-xs font-bold border text-left transition-all ${
                        cropPreset === 'full'
                          ? 'bg-indigo-50 text-indigo-900 border-indigo-500 ring-1 ring-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span>Full Sheet (100%)</span>
                        <Sliders className="w-3.5 h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-normal block">
                        Fit complete original without cropping
                      </span>
                    </button>
                  </div>
                </div>

                {/* Adjustments: Rotation & Barcode Contrast */}
                <div className="space-y-3 pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Rotate Label:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setRotation((r) => (r + 90) % 360)}
                        className="px-2.5 py-1 bg-white border border-slate-200 hover:bg-slate-100 rounded text-xs font-semibold text-slate-700 flex items-center gap-1"
                      >
                        <RotateCw className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Rotate +90°</span>
                      </button>
                      <span className="text-xs font-mono text-slate-500">{rotation}°</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Thermal Barcode Enhancer
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        Increases black/white contrast for laser scanner readability
                      </span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={highContrast}
                        onChange={(e) => setHighContrast(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                </div>

                {/* Action Print / Download Buttons */}
                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    id="btn-print-thermal"
                    onClick={handleDirectPrint}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print on 4x6 Thermal Printer Now</span>
                  </button>

                  <button
                    id="btn-download-thermal"
                    onClick={handleDownloadCropped}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors"
                  >
                    <Download className="w-4 h-4 text-slate-600" />
                    <span>Download Cropped 4x6 PNG</span>
                  </button>
                </div>

                {/* Thermal Compatibility Notice */}
                <div className="text-[11px] text-slate-500 bg-amber-50/80 border border-amber-200/80 rounded-lg p-2.5 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Compatible Printers:</strong> TVS LP 46 Neo, TSC TE244/DA210, Zebra ZD220, Rollo, Xprinter, Everycom.
                  </span>
                </div>

              </div>

              {/* Right Canvas Preview Area */}
              <div className="lg:col-span-7 p-6 flex flex-col items-center justify-center bg-slate-900/95 min-h-[480px] relative overflow-hidden">
                
                {/* Print container that becomes visible during browser print command */}
                <div id="printable-label-container" className="hidden">
                  <canvas ref={printCanvasRef} />
                </div>

                <div className="text-center mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Live 4x6 Thermal Label Output Preview
                  </span>
                </div>

                {/* Canvas Container */}
                <div className="relative border-4 border-slate-800 rounded-lg shadow-2xl bg-white max-w-full overflow-auto max-h-[500px]">
                  <canvas 
                    ref={canvasRef} 
                    className="w-[280px] sm:w-[320px] h-auto object-contain block mx-auto"
                  />
                  
                  {isProcessing && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Processing Label...</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <Check className="w-3.5 h-3.5" /> Ready for Dispatch
                  </span>
                  <span>•</span>
                  <span>Exact Dimensions: 100mm × 150mm</span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: E-COMMERCE PROFIT & ROI CALCULATOR                      */}
        {/* ============================================================== */}
        {activeTab === 'calculator' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-indigo-600" />
                  <span>Marketplace Net Profit & Loss Calculator</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Accurately calculates platform commission, reverse RTO shipping penalty, GST on fees, and real in-hand profit.
                </p>
              </div>

              {/* Marketplace Selector Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1">Platform:</span>
                {(['flipkart', 'amazon', 'meesho', 'shopsy'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => handleMarketplaceChange(m)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      calcMarketplace === m
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <MarketplaceLogo id={m} size="xs" />
                    <span>{m}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Inputs Form */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Selling Price (MRP / Listed Price ₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-500 text-sm font-bold">₹</span>
                      <input
                        type="number"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(Number(e.target.value) || 0)}
                        className="w-full pl-8 pr-3 py-2 text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Product Manufacturing / Sourcing Cost (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-slate-500 text-sm font-bold">₹</span>
                      <input
                        type="number"
                        value={productCost}
                        onChange={(e) => setProductCost(Number(e.target.value) || 0)}
                        className="w-full pl-8 pr-3 py-2 text-sm font-bold bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Referral Fee ({referralPercent}%)
                    </label>
                    <input
                      type="number"
                      value={referralPercent}
                      onChange={(e) => setReferralPercent(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Closing / Fixed Fee (₹)
                    </label>
                    <input
                      type="number"
                      value={fixedClosingFee}
                      onChange={(e) => setFixedClosingFee(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Outward Shipping Fee (₹)
                    </label>
                    <input
                      type="number"
                      value={shippingCost}
                      onChange={(e) => setShippingCost(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Packaging Box + Tape (₹)
                    </label>
                    <input
                      type="number"
                      value={packagingCost}
                      onChange={(e) => setPackagingCost(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      RTO / Return Rate (%)
                    </label>
                    <input
                      type="number"
                      value={returnRatePercent}
                      onChange={(e) => setReturnRatePercent(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <span className="text-[10px] text-slate-500">Avg. 10%-20% on fashion</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ad / PPC Cost Per Order (₹)
                    </label>
                    <input
                      type="number"
                      value={adSpendPerOrder}
                      onChange={(e) => setAdSpendPerOrder(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Daily Dispatched Orders Simulator ({dailyOrderCount} orders/day)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={dailyOrderCount}
                    onChange={(e) => setDailyOrderCount(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>5 orders/day</span>
                    <span className="font-bold text-indigo-600">{dailyOrderCount} orders/day</span>
                    <span>200+ orders/day</span>
                  </div>
                </div>

              </div>

              {/* Profit Analysis Result Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
                
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1">
                    Financial Summary ({calcMarketplace.toUpperCase()})
                  </div>
                  
                  {/* Hero Net Profit Badge */}
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 mb-4">
                    <div className="text-xs text-slate-400">In-Hand Net Profit / Unit</div>
                    <div className={`text-3xl font-display font-extrabold mt-1 ${
                      netProfitPerUnit > 0 ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      ₹{netProfitPerUnit.toLocaleString('en-IN')}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <span className="text-slate-300">Net Margin:</span>
                      <span className={`font-bold px-2 py-0.5 rounded ${
                        Number(netMarginPercent) > 15 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {netMarginPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Deductions Breakdown */}
                  <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Product Sourcing:</span>
                      <span>₹{productCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Marketplace Fees ({referralPercent}% + ₹{fixedClosingFee}):</span>
                      <span>₹{Math.round(marketplaceTotalFee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">GST on Platform (18%):</span>
                      <span>₹{Math.round(gstOnMarketplaceFees)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Outward Courier:</span>
                      <span>₹{shippingCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Return & RTO Risk Reserve:</span>
                      <span className="text-amber-400">₹{Math.round(returnLossAllocation)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Advertising / TACoS:</span>
                      <span>₹{adSpendPerOrder}</span>
                    </div>
                    <div className="flex justify-between font-bold border-t border-slate-800 pt-1 text-slate-100">
                      <span>Total Costs Per Order:</span>
                      <span>₹{Math.round(totalDeductions)}</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Run Rate */}
                <div className="mt-5 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-400">Monthly Projected Net Profit:</div>
                      <div className="text-xl font-display font-extrabold text-amber-300">
                        ₹{monthlyProjectedProfit.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-slate-500">Based on {dailyOrderCount * 30} orders / month</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-slate-400">Breakeven Price:</div>
                      <div className="text-sm font-bold text-white">₹{breakevenPrice}</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: ORDER SKU COUNTER & PACKING PICK-LIST                   */}
        {/* ============================================================== */}
        {activeTab === 'skuCounter' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                  <ListOrdered className="w-5 h-5 text-indigo-600" />
                  <span>Order SKU Counter & Warehouse Pick-List</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Paste your Flipkart, Amazon, or Meesho order manifest. Instantly groups SKUs and counts total picking quantities.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySkuList}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 flex items-center gap-1.5 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Pick-List</span>
                </button>
              </div>
            </div>

            {copiedNotification && (
              <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{copiedNotification}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Text Input */}
              <div className="lg:col-span-6 space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Paste Raw Order List / SKUs (Format: `SKU, Quantity` or one SKU per line)
                </label>
                <textarea
                  value={skuInputText}
                  onChange={(e) => setSkuInputText(e.target.value)}
                  rows={9}
                  className="w-full p-3 text-xs font-mono bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Paste order SKUs here..."
                />
                <p className="text-[11px] text-slate-500">
                  Tip: Supports copy-paste directly from Excel, Meesho Pending Orders, or Flipkart manifest CSV.
                </p>
              </div>

              {/* Aggregated Output Table */}
              <div className="lg:col-span-6 bg-slate-50 rounded-xl border border-slate-200 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Aggregated Dispatch Pick-List
                    </span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-500">Unique SKUs: <strong>{parsedSkuList.length}</strong></span>
                      <span className="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-full text-[11px]">
                        Total Units: {totalUnitsToPick}
                      </span>
                    </div>
                  </div>

                  <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-1">
                    {parsedSkuList.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200 text-xs"
                      >
                        <span className="font-mono font-semibold text-slate-800 truncate mr-2">
                          {item.sku}
                        </span>
                        <span className="bg-slate-900 text-white font-extrabold px-2.5 py-0.5 rounded text-xs shrink-0">
                          {item.quantity} pcs
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
                  <span>Fast packing dispatch ready.</span>
                  <button
                    onClick={() => window.print()}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Packing Slip</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: MARKETPLACE COMMISSIONS CHEATSHEET                      */}
        {/* ============================================================== */}
        {activeTab === 'fees' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 overflow-x-auto">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Indian Marketplace Fee & Commission Comparison (2026)
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Compare marketplace commission, closing fees, and reverse shipping policies across major Indian portals.
            </p>

            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider">
                  <th className="p-3.5 rounded-tl-lg">Marketplace</th>
                  <th className="p-3.5">Referral Commission</th>
                  <th className="p-3.5">Closing Fee</th>
                  <th className="p-3.5">Payment Gateway Fee</th>
                  <th className="p-3.5">Customer Return Penalty</th>
                  <th className="p-3.5 rounded-tr-lg">Best Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-blue-600">
                    <div className="flex items-center gap-2">
                      <MarketplaceLogo id="flipkart" size="xs" />
                      <span>Flipkart</span>
                    </div>
                  </td>
                  <td className="p-3.5">5% - 18% (Varies by category)</td>
                  <td className="p-3.5">₹12 - ₹45 tiered by item value</td>
                  <td className="p-3.5">Included in closing fee</td>
                  <td className="p-3.5">Reverse shipping charged on seller error</td>
                  <td className="p-3.5 font-medium">Electronics, Footwear, Mobiles</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-amber-600">
                    <div className="flex items-center gap-2">
                      <div className="bg-white border rounded p-0.5"><MarketplaceLogo id="amazon" size="xs" /></div>
                      <span>Amazon India</span>
                    </div>
                  </td>
                  <td className="p-3.5">6% - 22% (Category dependent)</td>
                  <td className="p-3.5">₹5 - ₹61 (FBA / Easy Ship)</td>
                  <td className="p-3.5">Included in closing fee</td>
                  <td className="p-3.5">Refund processing fee (20% of commission)</td>
                  <td className="p-3.5 font-medium">Home, Kitchen, Books, Premium D2C</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-pink-600">
                    <div className="flex items-center gap-2">
                      <MarketplaceLogo id="meesho" size="xs" />
                      <span>Meesho</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-emerald-600 font-bold">0% Commission</td>
                  <td className="p-3.5 text-emerald-600 font-bold">₹0 Closing Fee</td>
                  <td className="p-3.5 text-emerald-600 font-bold">0% PG Fee</td>
                  <td className="p-3.5">Only courier reverse fee on RTO/Returns</td>
                  <td className="p-3.5 font-medium">Ethnic wear, Low-cost fashion, Jewelry</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-emerald-600">
                    <div className="flex items-center gap-2">
                      <MarketplaceLogo id="shopsy" size="xs" />
                      <span>Shopsy</span>
                    </div>
                  </td>
                  <td className="p-3.5 font-bold text-emerald-600">0% Commission</td>
                  <td className="p-3.5">₹5 - ₹15 nominal</td>
                  <td className="p-3.5">Included</td>
                  <td className="p-3.5">Nominal reverse shipping</td>
                  <td className="p-3.5 font-medium">Budget fashion, Tier 2/3 buyers</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-blue-800">JioMart</td>
                  <td className="p-3.5">3% - 12%</td>
                  <td className="p-3.5">₹10 - ₹25</td>
                  <td className="p-3.5">Included</td>
                  <td className="p-3.5">Standard logistics deduction</td>
                  <td className="p-3.5 font-medium">Grocery, Daily Staples, FMCG</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
