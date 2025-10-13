export interface APICategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

export interface APIEndpoint {
  id: string;
  name: string;
  category: string;
  description: string;
  inputFields: InputField[];
  sampleResponse: any;
}

export interface InputField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const categories: APICategory[] = [
  {
    id: 'kyc',
    name: 'KYC APIs',
    description: 'Identity verification and KYC compliance solutions',
    icon: 'UserCheck',
    count: 35,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'kyb',
    name: 'KYB APIs',
    description: 'Business verification and compliance checking',
    icon: 'Building2',
    count: 28,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'utilities',
    name: 'Utilities APIs',
    description: 'General utility and data enrichment services',
    icon: 'Zap',
    count: 42,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'mobile360',
    name: 'Mobile360 APIs',
    description: 'Comprehensive mobile intelligence and profiling',
    icon: 'Smartphone',
    count: 24,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'financial',
    name: 'Financial Check APIs',
    description: 'Financial verification and credit assessment',
    icon: 'CreditCard',
    count: 21,
    color: 'from-indigo-500 to-indigo-600'
  }
];

export const apiEndpoints: APIEndpoint[] = [
  // KYC APIs
  {
    id: 'pan-verification',
    name: 'PAN Verification',
    category: 'kyc',
    description: 'Verify PAN card details and retrieve holder information',
    inputFields: [
      { name: 'pan', label: 'PAN Number', type: 'text', placeholder: 'ABCDE1234F', required: true }
    ],
    sampleResponse: {
      name: 'Rohit Sharma',
      pan: 'ABCDE1234F',
      dob: '20/06/1990',
      status: 'Active',
      aadhaarLinked: true,
      verified: true,
      lastUpdated: '15/03/2024'
    }
  },
  {
    id: 'aadhaar-verification',
    name: 'Aadhaar Verification',
    category: 'kyc',
    description: 'Verify Aadhaar number and retrieve demographic details',
    inputFields: [
      { name: 'aadhaar', label: 'Aadhaar Number', type: 'text', placeholder: '1234 5678 9012', required: true }
    ],
    sampleResponse: {
      name: 'Rohit Sharma',
      aadhaar: '1234 5678 9012',
      dob: '20/06/1990',
      gender: 'Male',
      address: {
        street: 'MG Road, Sector 12',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      mobileLinked: true,
      verified: true,
      addressesFound: 3
    }
  },
  {
    id: 'voter-id-verification',
    name: 'Voter ID Verification',
    category: 'kyc',
    description: 'Verify voter ID card and retrieve electoral details',
    inputFields: [
      { name: 'voterId', label: 'Voter ID', type: 'text', placeholder: 'ABC1234567', required: true }
    ],
    sampleResponse: {
      name: 'Priya Singh',
      voterId: 'ABC1234567',
      dob: '15/08/1992',
      fatherName: 'Rajesh Singh',
      constituency: 'Mumbai North',
      pollingStation: 'PS-042',
      status: 'Active',
      verified: true
    }
  },
  {
    id: 'driving-license',
    name: 'Driving License Verification',
    category: 'kyc',
    description: 'Verify driving license and retrieve holder details',
    inputFields: [
      { name: 'dlNumber', label: 'DL Number', type: 'text', placeholder: 'MH1234567890', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'DD/MM/YYYY', required: true }
    ],
    sampleResponse: {
      name: 'Amit Kumar',
      dlNumber: 'MH1234567890',
      dob: '10/03/1988',
      issueDate: '05/01/2015',
      expiryDate: '04/01/2035',
      vehicleClasses: ['LMV', 'MCWG'],
      address: 'Andheri West, Mumbai, Maharashtra',
      status: 'Active',
      verified: true
    }
  },
  {
    id: 'passport-verification',
    name: 'Passport Verification',
    category: 'kyc',
    description: 'Verify passport details and holder information',
    inputFields: [
      { name: 'passportNumber', label: 'Passport Number', type: 'text', placeholder: 'A1234567', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'DD/MM/YYYY', required: true }
    ],
    sampleResponse: {
      name: 'Sneha Patel',
      passportNumber: 'A1234567',
      dob: '25/12/1990',
      issueDate: '10/06/2019',
      expiryDate: '09/06/2029',
      placeOfIssue: 'Mumbai',
      nationality: 'Indian',
      status: 'Active',
      verified: true
    }
  },

  // KYB APIs
  {
    id: 'gst-verification',
    name: 'GST Verification',
    category: 'kyb',
    description: 'Verify GST number and retrieve business details',
    inputFields: [
      { name: 'gstin', label: 'GSTIN', type: 'text', placeholder: '29ABCDE1234F1Z5', required: true }
    ],
    sampleResponse: {
      legalName: 'Tech Innovations Private Limited',
      tradeName: 'TechInno',
      gstin: '29ABCDE1234F1Z5',
      status: 'Active',
      registrationDate: '01/07/2017',
      businessType: 'Private Limited Company',
      address: {
        building: 'Tower B, Tech Park',
        street: 'Electronic City',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560100'
      },
      verified: true,
      annualTurnover: '₹50-100 Cr',
      hsn: ['8471', '8517']
    }
  },
  {
    id: 'cin-verification',
    name: 'CIN Verification',
    category: 'kyb',
    description: 'Verify Company Identification Number and retrieve company details',
    inputFields: [
      { name: 'cin', label: 'CIN', type: 'text', placeholder: 'U72900KA2015PTC078945', required: true }
    ],
    sampleResponse: {
      companyName: 'Digital Solutions Private Limited',
      cin: 'U72900KA2015PTC078945',
      registrationNumber: '078945',
      companyType: 'Private Limited',
      incorporationDate: '15/03/2015',
      status: 'Active',
      authorizedCapital: '₹10,00,000',
      paidUpCapital: '₹5,00,000',
      registeredAddress: 'Koramangala, Bangalore, Karnataka - 560034',
      directors: 3,
      verified: true
    }
  },
  {
    id: 'udyam-verification',
    name: 'UDYAM Verification',
    category: 'kyb',
    description: 'Verify UDYAM registration and retrieve MSME details',
    inputFields: [
      { name: 'udyam', label: 'UDYAM Number', type: 'text', placeholder: 'UDYAM-KA-00-1234567', required: true }
    ],
    sampleResponse: {
      enterpriseName: 'Green Manufacturing Unit',
      udyamNumber: 'UDYAM-KA-00-1234567',
      registrationDate: '20/08/2020',
      category: 'Manufacturing',
      type: 'Micro',
      majorActivity: 'Manufacturing of electronic components',
      panNumber: 'ABCDE1234F',
      gstNumber: '29ABCDE1234F1Z5',
      address: 'Industrial Area, Peenya, Bangalore',
      verified: true,
      status: 'Active'
    }
  },
  {
    id: 'epfo-verification',
    name: 'EPFO Verification',
    category: 'kyb',
    description: 'Verify establishment EPFO details',
    inputFields: [
      { name: 'establishmentId', label: 'Establishment ID', type: 'text', placeholder: 'DLCPM1234567000', required: true }
    ],
    sampleResponse: {
      establishmentName: 'ABC Enterprises Pvt Ltd',
      establishmentId: 'DLCPM1234567000',
      address: 'Sector 18, Delhi - 110001',
      registrationDate: '01/01/2010',
      employeeCount: 245,
      status: 'Active',
      lastContribution: 'February 2024',
      verified: true
    }
  },

  // Utilities APIs
  {
    id: 'mobile-verification',
    name: 'Mobile Number Verification',
    category: 'utilities',
    description: 'Verify mobile number and retrieve operator details',
    inputFields: [
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '9876543210', required: true }
    ],
    sampleResponse: {
      mobile: '9876543210',
      operator: 'Airtel',
      circle: 'Maharashtra',
      type: 'Prepaid',
      status: 'Active',
      telecomCircle: 'Mumbai',
      verified: true,
      simCount: 1,
      whatsappRegistered: true
    }
  },
  {
    id: 'email-verification',
    name: 'Email Verification',
    category: 'utilities',
    description: 'Verify email address validity and deliverability',
    inputFields: [
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'user@example.com', required: true }
    ],
    sampleResponse: {
      email: 'rohit.sharma@example.com',
      valid: true,
      deliverable: true,
      disposable: false,
      role: false,
      provider: 'Gmail',
      mxRecords: true,
      verified: true,
      score: 95
    }
  },
  {
    id: 'bank-verification',
    name: 'Bank Account Verification',
    category: 'utilities',
    description: 'Verify bank account details and holder name',
    inputFields: [
      { name: 'accountNumber', label: 'Account Number', type: 'text', placeholder: '1234567890', required: true },
      { name: 'ifsc', label: 'IFSC Code', type: 'text', placeholder: 'SBIN0001234', required: true }
    ],
    sampleResponse: {
      accountNumber: '1234567890',
      ifsc: 'SBIN0001234',
      accountHolderName: 'ROHIT SHARMA',
      bankName: 'State Bank of India',
      branchName: 'Andheri West',
      city: 'Mumbai',
      state: 'Maharashtra',
      accountType: 'Savings',
      status: 'Active',
      verified: true
    }
  },
  {
    id: 'pincode-lookup',
    name: 'Pincode Lookup',
    category: 'utilities',
    description: 'Get area details from pincode',
    inputFields: [
      { name: 'pincode', label: 'Pincode', type: 'text', placeholder: '400001', required: true }
    ],
    sampleResponse: {
      pincode: '400001',
      area: 'Churchgate',
      city: 'Mumbai',
      district: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      postOffices: 3,
      verified: true
    }
  },

  // Mobile360 APIs
  {
    id: 'mobile360-customer',
    name: 'Mobile360 - Customer Profile',
    category: 'mobile360',
    description: 'Comprehensive customer intelligence from mobile number',
    inputFields: [
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '9876543210', required: true }
    ],
    sampleResponse: {
      mobile: '9876543210',
      names: ['Rohit Sharma', 'R Sharma', 'Rohit S', 'Sharma Rohit'],
      namesCount: 4,
      addresses: [
        'MG Road, Sector 12, Mumbai, Maharashtra - 400001',
        'Andheri West, Mumbai, Maharashtra - 400058',
        'Electronic City, Bangalore, Karnataka - 560100',
        'Whitefield, Bangalore, Karnataka - 560066'
      ],
      addressesCount: 4,
      dobs: ['20/06/1990', '20/06/1989'],
      dobsCount: 2,
      simsLinked: 3,
      whatsappActive: true,
      emailsFound: ['rohit.sharma@email.com', 'r.sharma@company.com'],
      emailsCount: 2,
      gstLinked: 1,
      panLinked: 'ABCDE1234F',
      aadhaarLinked: true,
      score: 87,
      riskLevel: 'Low',
      lastUpdated: '15/03/2024'
    }
  },
  {
    id: 'mobile360-business',
    name: 'Mobile360 - Business Profile',
    category: 'mobile360',
    description: 'Business intelligence and verification from mobile',
    inputFields: [
      { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '9876543210', required: true }
    ],
    sampleResponse: {
      mobile: '9876543210',
      companyName: 'Tech Innovations Private Limited',
      tradeName: 'TechInno',
      gstin: '29ABCDE1234F1Z5',
      cin: 'U72900KA2015PTC078945',
      udyam: 'UDYAM-KA-00-1234567',
      registeredAddress: 'Tower B, Tech Park, Electronic City, Bangalore, Karnataka - 560100',
      directors: [
        { name: 'Rohit Sharma', din: 'DIN12345678', designation: 'Managing Director' },
        { name: 'Priya Singh', din: 'DIN87654321', designation: 'Director' },
        { name: 'Amit Kumar', din: 'DIN11223344', designation: 'Director' }
      ],
      directorsCount: 3,
      businessType: 'Private Limited Company',
      incorporationDate: '15/03/2015',
      authorizedCapital: '₹10,00,000',
      paidUpCapital: '₹5,00,000',
      annualTurnover: '₹50-100 Cr',
      verified: true,
      score: 92,
      status: 'Active'
    }
  },

  // Financial Check APIs
  {
    id: 'credit-score',
    name: 'Credit Score Check',
    category: 'financial',
    description: 'Retrieve credit score and financial health',
    inputFields: [
      { name: 'pan', label: 'PAN Number', type: 'text', placeholder: 'ABCDE1234F', required: true }
    ],
    sampleResponse: {
      pan: 'ABCDE1234F',
      name: 'Rohit Sharma',
      creditScore: 785,
      scoreRange: '750-850',
      rating: 'Excellent',
      totalAccounts: 8,
      activeLoans: 3,
      creditCards: 2,
      totalCreditLimit: '₹12,00,000',
      utilization: '32%',
      paymentHistory: 'Excellent',
      delayedPayments: 0,
      lastUpdated: '01/03/2024',
      verified: true
    }
  },
  {
    id: 'bank-statement-analysis',
    name: 'Bank Statement Analysis',
    category: 'financial',
    description: 'Analyze bank statements for financial insights',
    inputFields: [
      { name: 'accountNumber', label: 'Account Number', type: 'text', placeholder: '1234567890', required: true },
      { name: 'ifsc', label: 'IFSC Code', type: 'text', placeholder: 'SBIN0001234', required: true }
    ],
    sampleResponse: {
      accountNumber: '1234567890',
      accountHolderName: 'ROHIT SHARMA',
      bankName: 'State Bank of India',
      analysisMonths: 6,
      averageBalance: '₹2,45,000',
      minimumBalance: '₹85,000',
      maximumBalance: '₹5,20,000',
      totalCredits: '₹15,60,000',
      totalDebits: '₹12,80,000',
      salaryDetected: true,
      averageSalary: '₹1,25,000',
      bounceCount: 0,
      ecsReturns: 0,
      loanEMIs: ['₹25,000', '₹15,000'],
      financialHealth: 'Good',
      score: 82,
      verified: true
    }
  }
];
