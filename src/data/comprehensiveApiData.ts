export interface APIItem {
  id: string;
  name: string;
  category: string;
  requestSample?: any;
  responseSample?: any;
}

export interface CategoryData {
  id: string;
  name: string;
  apis: APIItem[];
}

export const apiCatalogData: CategoryData[] = [
  {
    id: "kyc",
    name: "KYC",
    apis: [
      { 
        id: "validate-pan", 
        name: "Validate PAN", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "Validate PAN",
          billable: true,
          txn_id: "2c4456ce-498d-4046-b8fe-c64b072e8087",
          message: "Valid PAN",
          status: 1,
          result: {
            pan: "DKYPA1234C",
            message: "Valid PAN"
          },
          datetime: "2024-01-16 13:16:32.597991"
        }
      },
      { 
        id: "pan-basic", 
        name: "PAN (Basic)", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "PAN Verification (Basic)",
          billable: true,
          txn_id: "6254d5b4-1530-4247-a734-743244d6de9f",
          message: "Success",
          status: 1,
          result: {
            pan_number: "ABCDE1234F",
            pan_status: "VALID",
            user_full_name: "XXXXX XXXXX",
            pan_type: "Person"
          },
          datetime: "2023-02-25 09:49:54.070393"
        }
      },
      { 
        id: "pan-advance-v2", 
        name: "PAN (Advance) - V2", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Verification (Advance) - V2",
          billable: true,
          txn_id: "98bc1e55-47ae-45e0-9675-4389ecda936d",
          message: "Success",
          status: 1,
          result: {
            pan_number: "ABCDE1234F",
            full_name: "RAMESH KUMAR SINGH",
            name: {
              first_name: "RAMESH",
              middle_name: "KUMAR",
              last_name: "SINGH"
            },
            doi: "21/01/2014",
            father_name: "SURESH SINGH",
            gender: "Male",
            category: "Person",
            masked_aadhaar: "68XXXXXXXX13",
            aadhaar_linked: true
          },
          datetime: "2023-06-01 16:00:29.653722"
        }
      },
      { 
        id: "pan-advance-v3", 
        name: "PAN (Advance) - V3", 
        category: "kyc",
        requestSample: {
          pan: "ABCDEF5347F"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Verification (Advance) - V3",
          billable: true,
          txn_id: "51823f75-c031-46cb-b762-80f8d7e4e671",
          message: "Success",
          status: 1,
          result: {
            pan_number: "ABCDEF5347F",
            full_name: "RAM KUMAR",
            name: {
              first_name: "RAM",
              middle_name: "",
              last_name: "KUMAR"
            },
            dob: "1990-01-01",
            father_name: "SHYAM SINGH",
            gender: "MALE",
            category: "Person"
          },
          datetime: "2024-02-03 06:33:34.964012"
        }
      },
      { 
        id: "pan-supreme-v2", 
        name: "PAN (Supreme) - V2", 
        category: "kyc",
        requestSample: {
          pan: "ABCPD1234E"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Verification Supreme - V2",
          billable: true,
          txn_id: "4e534beb-d3c6-41f0-b38a-3a2836827b7f",
          message: "success",
          status: "1",
          result: {
            pan: "ABCPD1234E",
            first_name: "RAM",
            middle_name: "",
            last_name: "SINGH",
            full_name: "RAM SINGH",
            gender: "M",
            dob: "1999-01-01",
            email: "ra*********h@gmail.com",
            mobile: "12XXXXXX34",
            aadhaar: "XXXXXXXX1234",
            aadharlink: true,
            tax: true,
            address: {
              address_line_1: "A-123",
              address_line_2: "ABC-Colony",
              address_line_3: "Sector 123",
              address_line_4: "Sector 123",
              address_line_5: "Noida",
              pin_code: "201301",
              state: "Uttar Pradesh"
            },
            category: "Person"
          },
          datetime: "2024-03-08 10:38:10.650776"
        }
      },
      { 
        id: "pan-premium", 
        name: "PAN (Premium)", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Verification",
          billable: true,
          txn_id: "53ba2ee6-bfb6-4897-a4ad-24f34211fab2",
          message: "Success",
          status: 1,
          result: {
            pan_number: "ABCDE1234F",
            full_name: "XXXX SINGH",
            full_name_split: ["XXXXX", "", "SINGH"],
            masked_aadhaar: "XXXXXXXX2610",
            address: {
              line_1: "XXXX UMGA",
              line_2: "",
              street_name: "",
              zip: "724208",
              city: "MADANPUR",
              state: "",
              country: "",
              full: "XXXXXX UMGA 724208 MADANPUR"
            },
            email: "",
            phone_number: "",
            gender: "M",
            dob: "XXXX-01-16",
            aadhaar_linked: true,
            category: "person",
            less_info: false,
            is_director: {
              found: "No",
              info: []
            },
            is_sole_proprietor: {
              found: "No",
              info: []
            },
            doi: "XXXX-01-01"
          },
          datetime: "2023-04-11 08:18:34.372596"
        }
      },
      { 
        id: "pan-all-in-one", 
        name: "PAN All in One", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN All in One",
          billable: true,
          txn_id: "89a132d5-a319-4de3-acc8-df87527ce98a",
          message: "Success",
          status: 1,
          result: {
            pan_number: "BZEPG1234D",
            full_name: "RAM KUMAR",
            full_name_split: ["RAM", "", "KUMAR"],
            masked_aadhaar: "XXXXXXXX1234",
            address: {
              line_1: "Shyam Colony",
              line_2: "Near Banna Devi Thana, G.T. Road, Aligarh, U.P.",
              street_name: "Khair Mandi B.O",
              zip: "402001",
              city: "Koil",
              state: "Uttar Pradesh",
              country: "INDIA",
              full: "G.T. Road, Aligarh, U.P. Khair Mandi B.O Koil Uttar PradeshINDIA 202001"
            },
            email: "ramkumar@gmail.com",
            tax: true,
            phone_number: "9876543210",
            gender: "M",
            dob: "1900-01-01",
            aadhaar_linked: true,
            category: "person",
            less_info: false,
            is_director: {
              found: "No",
              info: []
            },
            is_sole_proprietor: {
              found: "No",
              info: []
            },
            doi: "",
            fname: "SHYAM KUMAR",
            din_info: {
              din: "09811234",
              dinAllocationDate: "12/09/2022",
              company_list: [
                {
                  cin: "U72900UP2022PTC171234",
                  company_name: "ABC PRIVATE LIMITED"
                }
              ]
            }
          },
          datetime: "2024-01-05 13:22:34.287747"
        }
      },
      { 
        id: "pan-demographic", 
        name: "PAN Demographic", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F",
          dob: "10-10-1995",
          name: "Ram Singh"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "Verify Pan",
          billable: true,
          txn_id: "d839dadd-c7aa-442e-81ae-e65ae3702db9",
          message: "Success",
          status: 1,
          result: {
            pan: "ABCDE1234F",
            pan_status: "E",
            dob: "Y",
            Name: "Y",
            pan_type: "Person",
            seeding_status: "Y"
          },
          datetime: "2024-05-24 07:20:16.337185"
        }
      },
      { 
        id: "pan-demographic-v2", 
        name: "PAN Demographic V2", 
        category: "kyc",
        requestSample: {
          pan: "ABCPD1234E",
          dob: "1999-01-01",
          name: "Ram Singh",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their pan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "2764a094-cf52-4d18-8fbb-751ae92b9fa4",
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Demographic V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            document_type: "PAN",
            aadhaar_linked: true,
            name_match_status: "MATCH",
            dob_match_status: "MATCH",
            status: "E"
          },
          datetime: "2025-03-31 08:36:04.218243"
        }
      },
      { 
        id: "pan-to-dl", 
        name: "PAN to DL", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          txn_id: "821ab087-08de-4bf7-9664-165048075bde",
          api_category: "KYC",
          api_name: "Pan to DL",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            PAN: "ABCDE1234F",
            Pan_Name: "RAMAN GAUR",
            Pan_Father_Name: "SURESH GAUR",
            dob: "01-01-1999",
            gender: "MALE",
            dl: {
              user_address: [
                {
                  addressLine1: "123-C",
                  completeAddress: "123-C Dadri,Saharanpur,UP ",
                  country: "INDIA",
                  district: "Dadri,Saharanpur,UP",
                  pin: "201315",
                  state: "Uttar Pradesh",
                  type: "Permanent"
                }
              ],
              user_blood_group: "AB+",
              dl_number: "UP1612345678901",
              user_dob: "01-01-1999",
              endorse_date: "NA",
              endorse_number: "NA",
              expiry_date: "04-07-2040",
              father_or_husband: "Suresh GAUR",
              issued_date: "23-07-2020",
              non_transport_validity: {
                from: "23-07-2020",
                to: "04-07-2040"
              },
              state: "Uttar Pradesh",
              category: "",
              status: "Active",
              status_details: {
                from: "",
                remarks: "",
                to: ""
              },
              transport_validity: {
                from: "",
                to: ""
              },
              user_full_name: "",
              user_image: "<base64-of-user-image>",
              vehicle_category_details: [
                {
                  cov: "LMV",
                  expiryDate: "",
                  issueDate: ""
                }
              ]
            }
          },
          datetime: "2024-01-16 11:33:35.931273"
        }
      },
      { id: "pan-to-fathers-name", name: "PAN to Father's Name", category: "kyc" },
      { 
        id: "pan-to-name-dob", 
        name: "PAN to Name and DOB", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "PAN to Name and DOB",
          billable: false,
          txn_id: "ea085a37-de4d-43c7-a080-52d1f38ddd7e",
          message: "Success",
          status: 1,
          result: {
            pan: "ABCDE1234F",
            firstName: "RAM",
            midName: "",
            lastName: "SINGH",
            full_name: "RAM SINGH",
            dob: "01-01-2000",
            category: "person"
          },
          datetime: "2024-05-13 09:06:33.697440"
        }
      },
      { 
        id: "pan-to-name-on-card", 
        name: "PAN to Name On Card", 
        category: "kyc",
        requestSample: {
          pan: "ABCDE1234F",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their PAN data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "7d24cf5d-55b1-480c-b5ac-b21af3250358",
          api_category: "KYC",
          api_name: "PAN to Name On Card",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            pan: "ABCDE1234F",
            name_on_card: "RAM SINGH"
          },
          datetime: "2025-03-03 16:54:07.157515"
        }
      },
      { 
        id: "206ab", 
        name: "206AB", 
        category: "kyc",
        requestSample: {
          pan: "AAGCI1234H",
          consent: "Y",
          consent_text: "I give my consent to 206AB api to verify my pan info"
        },
        responseSample: {
          api_category: "Know your customer(KYC)",
          api_name: "206AB",
          billable: true,
          txn_id: "c28b23f6-efb3-43f3-8f40-ea0fc0dada5a",
          message: "Success",
          status: 1,
          result: {
            pan_number: "AAGCI1234H",
            masked_name: "IXXXXXXD BY DXXXXS TXXXXXXXXXXS PXXXXXE LXXXXXD ",
            pan_allotment_date: "22-09-2018",
            pan_status: "Operative",
            specified_person: "No"
          },
          datetime: "2024-03-28 07:16:23.817761"
        }
      },
      { 
        id: "occupation-status", 
        name: "Occupation Status", 
        category: "kyc",
        requestSample: {
          pan: "ABCPG0123D",
          consent_text: "I give my consent to Occupation Status API to fetch my info",
          consent: "Y"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "Occupation Status",
          billable: true,
          txn_id: "f42cf7ee-03ed-4f00-8ccf-fba88192dea3",
          message: "Success",
          status: 1,
          result: {
            pan: "ABCPG0123D",
            employement_status: "Y",
            director_status: "N",
            sole_proprietor_status: ""
          },
          datetime: "2024-06-19 06:29:28.487484"
        }
      },
      { 
        id: "mobile-to-dl-advance", 
        name: "Mobile to DL Advance", 
        category: "kyc",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "b678a1cc-9bc0-4be7-aa36-bbbf5e5f4703",
          api_category: "Know Your Customer (KYC)",
          api_name: "Mobile to DL Advance",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            user_address: [
              {
                addressLine1: "ABC",
                completeAddress: "ABC",
                country: "INDIA",
                district: "Bangalore",
                pin: "121212",
                state: "Karnataka",
                type: "Permanent"
              }
            ],
            user_blood_group: "AB+",
            dl_number: "KA01 20231234567",
            user_dob: "01-01-1999",
            endorse_date: "NA",
            endorse_number: "NA",
            expiry_date: "01-01-2041",
            father_or_husband: "SHAM SINGH",
            issued_date: "01-01-2023",
            non_transport_validity: {
              from: "01-01-2023",
              to: "01-01-2041"
            },
            state: "Karnataka",
            category: "General",
            status: "Active",
            status_details: {
              from: "",
              remarks: "",
              to: ""
            },
            transport_validity: {
              from: "",
              to: ""
            },
            user_full_name: "RAM SINGH",
            user_image: "base64_of_image>",
            vehicle_category_details: [
              {
                cov: "LMV",
                expiryDate: "01-01-2041",
                issueDate: "01-01-2023"
              }
            ]
          },
          datetime: "2025-07-23 09:04:34.811318"
        }
      },
      { 
        id: "dl-advance", 
        name: "DL (Advance)", 
        category: "kyc",
        requestSample: {
          dl_no: "AP00920130xxxxxx",
          dob: "dd-mm-yyyy"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "DL Verification (Advance)",
          billable: true,
          txn_id: "c029cd61-17e5-45c5-af50-b32d3b21966c",
          message: "Success",
          status: 1,
          result: {
            user_address: [
              {
                addressLine1: "XXXXXX XXXXX",
                completeAddress: "XXXXXX XXXXX",
                country: "INDIA",
                district: "PRATHIBHA COLONY TEH KOIL",
                pin: "202001",
                state: "Uttar Pradesh",
                type: "Permanent"
              }
            ],
            user_blood_group: "O+",
            dl_number: "UP81XXXXXXX ",
            user_dob: "02-10-XXXX",
            endorse_date: "28-12-2018",
            endorse_number: "UP81 /AED/0002697/XXXX",
            expiry_date: "27-11-2037",
            father_or_husband: "XXXXX KUMAR",
            issued_date: "28-11-XXXX",
            non_transport_validity: {
              from: "28-11-2017",
              to: "27-11-2037"
            },
            state: "Uttar Pradesh",
            status: "Active",
            status_details: {
              from: "",
              remarks: "",
              to: ""
            },
            transport_validity: {
              from: "",
              to: ""
            },
            user_full_name: "XXXX XXXXX",
            user_image: "<base64 of user image>",
            vehicle_category_details: [
              {
                cov: "LMV",
                expiryDate: "",
                issueDate: ""
              }
            ]
          },
          datetime: "2023-02-27 09:27:20.120818"
        }
      },
      { 
        id: "voter-id", 
        name: "Voter ID", 
        category: "kyc",
        requestSample: {
          voter: "XXXXXXXXX"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "Voter",
          billable: true,
          txn_id: "926b358c-f573-4762-8163-49d143655dc5",
          message: "Success",
          status: 1,
          result: {
            address: {
              district_code: "14",
              district_name: "Rangareddy",
              district_name_vernacular: "రంగారెడ్డి ",
              state: "Telangana",
              state_code: "S29"
            },
            user_age: 55,
            assembly_constituency_name: "Lal Bahadur Nagar",
            assembly_constituency_name_vernacular: "లాల్ బహాదుర్ నగర్",
            assembly_constituency_number: "49",
            constituency_part_name: "XXXXXXXXX XXXXXXX, Lalitha Nagar, Drawing Room",
            constituency_part_name_vernacular: "XXXXXXXX, XXXXXXX, లలిత నగర్, డ్రాయింగ్ రూమ్",
            constituency_part_number: "505",
            constituency_section_number: "1",
            epic_number: "ZTS041XXXX",
            user_gender: "M",
            parliamentary_constituency_name: "Malkajgiri",
            parliamentary_constituency_name_vernacular: "మల్కజగిరి",
            parliamentary_constituency_number: "7",
            polling_booth: {
              lat_long: "0.0,0.0",
              name: "XXXXXXXX, XXXXXXX, Lalitha Nagar, LKG Room",
              name_vernacular: "XXXXXXX, XXXXXXXX, లలిత నగర్, ఎల్ కే జి రూమ్",
              number: "505"
            },
            relative_name_english: "XXXXXX Raju Gamini",
            relative_name_vernacular: "సత్తి రాజు గమిని",
            relative_relation: "F",
            serial_number_applicable_part: "289",
            status: "N",
            user_name_english: "XXXXX XXXXX Gamini",
            user_name_vernacular: "శ్రీనివాస రావు గమిని",
            voter_last_updated_date: "Wed Feb 08 04:15:42 IST 2023"
          },
          datetime: "2023-02-27 09:20:54.443255"
        }
      },
      { id: "document-ocr", name: "Document OCR", category: "kyc" },
      { id: "aadhaar-masking", name: "Aadhaar Masking", category: "kyc" },
      { 
        id: "aadhaar-masking-ocr", 
        name: "Aadhaar Masking And OCR", 
        category: "kyc",
        requestSample: {
          doc_front: "<base64/File URL of document front image/pdf>",
          doc_back: "<base64/File URL of document back image/pdf>",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their aadhaar data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "f22e17cf-bd22-426e-b6c8-455ce8c4b8ec",
          api_category: "KYC",
          api_name: "Aadhaar Masking And OCR",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            address: "ABC Colony, Nashik, Maharashtra",
            address_line_one: "ABC Colony",
            address_line_two: "Nashik, Maharashtra",
            back_image_status: false,
            card_number: "12345678912",
            card_type: "aadhaar",
            city: "Nashik",
            country: "India",
            date_of_birth: "01/01/1999",
            daughter_of: "",
            district: "",
            father_name: "SHAM SINGH",
            front_image_status: true,
            gender: "Male",
            name_on_card: "RAM SINGH",
            pin: "123456",
            son_of: "",
            state: "",
            type_of_date: "DOB",
            virtual_id: "",
            aadhaar_masked_image: "<base64 of document>"
          },
          datetime: "2025-04-04 11:38:16.831193"
        }
      },
      { id: "aadhaar-xml-parser", name: "Aadhaar XML Parser", category: "kyc" },
      { 
        id: "name-match", 
        name: "Name Match", 
        category: "kyc",
        requestSample: {
          name1: "XXXXXX XXXXX",
          name2: "XXXXXX XXXXX"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "Name Match",
          billable: true,
          txn_id: "b2470de6-279c-4d43-9345-f395bbce06d9",
          message: "Success",
          status: 1,
          result: {
            similarity: "70",
            match: "true"
          },
          datetime: "2023-03-02 14:19:38.078199"
        }
      },
      { 
        id: "address-match", 
        name: "Address Match", 
        category: "kyc",
        requestSample: {
          address_1: "Near Uttam Nagar East Metro Station Uttam Nagar, , West Delhi, Delhi, India, 110059",
          address_2: "8-D, HANSALYA 15 BARAKHAMBA ROAD, , NEW DELHI, Delhi, India",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Address data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "12cdf27c-f74c-4b59-8b4e-bf5e556f1322",
          api_category: "KYC",
          api_name: "Address Match",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            address_1: {
              address_line_1: "Near Uttam Nagar East Metro Station",
              address_line_2: "Uttam Nagar",
              address_line_3: "",
              locality: "",
              city: "Delhi",
              state: "",
              pin_code: "110059"
            },
            address_2: {
              address_line_1: "8-D, HANSALYA 15 BARAKHAMBA ROAD",
              address_line_2: "",
              address_line_3: "",
              locality: "NEW DELHI",
              city: "DELHI",
              state: "",
              pin_code: ""
            },
            individual_match: {
              address_line_1: "no",
              address_line_2: "no",
              address_line_3: "",
              locality: "no",
              city: "yes",
              state: "",
              pin_code: "no"
            },
            match_score: "0.0"
          },
          datetime: "2025-02-04 13:12:40.120628"
        }
      },
      { id: "face-match", name: "Face Match", category: "kyc" },
      { 
        id: "liveness-check", 
        name: "Liveness Check", 
        category: "kyc",
        requestSample: {
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their image data. Consent remains valid, informed, and unwithdrawn.",
          image_base64: "<base_64_of_image>"
        },
        responseSample: {
          txn_id: "647a20ab-50ba-4952-9c71-8056ab2da543",
          api_category: "KYC",
          api_name: "Liveness Check",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            pred_idx: "real",
            prob_real: "0.9232957363128662"
          },
          datetime: "2025-06-24 09:30:59.214339"
        }
      },
      { 
        id: "passport-verification", 
        name: "Passport Verification", 
        category: "kyc",
        requestSample: {
          passport_number: "T1234567",
          file_number: "UP1234567890122",
          dob: "01/01/1990",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their Passport Number, File Number and Date of Birth and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "10f3fe4d-9c1a-4996-bf6a-2b1462fd3932",
          api_category: "Know Your Customer (KYC)",
          api_name: "Passport Verification",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            application_received_on_date: "21/05/2019",
            status: "passport t1234567 has been dispatched on 17/06/2019 via  speed post tracking number pp123456789in.",
            file_number: "UP1234567890122",
            passport_number: "T1234567",
            dob: "01/01/1990",
            full_name: "ram kumar",
            first_name: "ram",
            last_name: "kumar",
            dispatch_status: "DISPATCHED",
            type_of_application: "normal"
          },
          datetime: "2024-09-06 13:53:52.098028"
        }
      },
      { id: "digital-document-verification", name: "Digital Document Verification", category: "kyc" },
    ],
  },
  {
    id: "kyb",
    name: "KYB",
    apis: [
      { 
        id: "gst-basic", 
        name: "GST (Basic)", 
        category: "kyb",
        requestSample: {
          gst_number: "05AAALI0033XXXX"
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "GST Verification (Basic)",
          billable: true,
          txn_id: "d858084f-28a4-498d-bd12-bca8c8ae1514",
          message: "Success",
          status: 1,
          result: {
            taxpayer_type: "Regular",
            state_jurisdiction: "CHEMBUR-EAST_702",
            legal_name_of_business: "ABCD INDIA PRIVATE LIMITED",
            nature_of_business: ["Supplier of Services", "Export"],
            gst_number: "27AAJCB1234N1ZS",
            last_updated: "11/11/2022",
            constitution_of_business: "Private Limited Company",
            date_of_registration: "11/08/2020",
            primary_business_address: {
              floor_number: "12th FLOOR",
              city: "",
              pin: "400071",
              distric: "Mumbai",
              state: "Maharashtra",
              latitude: "",
              longitude: "",
              location: "NEXT TO RAM MARKET, CHEMBUR",
              building_number: "FLAT NO. 1002",
              building_name: "SAFAL HEIGHTS",
              business_nature: "Supplier of Services, Export"
            },
            trade_name: "ABCD INDIA PRIVATE LIMITED",
            state_jurisdiction_code: "MHCG0680",
            status: "Active"
          },
          datetime: "2024-04-03 12:21:29.951879"
        }
      },
      { 
        id: "gst-advance", 
        name: "GST (Advance)", 
        category: "kyb",
        requestSample: {
          gst_no: "XXXXXXXXXX"
        },
        responseSample: {
          api_category: "KYB",
          api_name: "GST Verification (Advance)",
          billable: true,
          txn_id: "a62dff46-e93d-4ddc-b8b3-acdeeac1695c",
          message: "Success",
          status: 1,
          result: {
            aggregate_turn_over: "NA",
            authorized_signatory: ["XXXXXXXX", "XXXXXXXXX", "XXXXXXXXX"],
            business_constitution: "Private Limited Company",
            business_details: [
              {
                saccd: "998313",
                sdes: "Information technology (IT) consulting and support services"
              },
              {
                saccd: "998599",
                sdes: "Other support services n.e.c."
              },
              {
                saccd: "998598",
                sdes: "Other information services n.e.c."
              }
            ],
            business_nature: ["Supplier of Services", "Recipient of Goods or Services"],
            can_flag: "NA",
            central_jurisdiction: "Commissionerate - GAUTAM BUDDHA NAGAR,Division - DIVISION I GAUTAM BUDH NAGAR,Range - RANGE - 1",
            compliance_rating: "NA",
            current_registration_status: "Active",
            filing_status: [[
              {
                fy: "2022-2023",
                taxp: "January",
                mof: "ONLINE",
                dof: "11/02/2023",
                rtntype: "GSTR1",
                arn: "NA",
                status: "Filed"
              },
              {
                fy: "2022-2023",
                taxp: "January",
                mof: "ONLINE",
                dof: "16/02/2023",
                rtntype: "GSTR3B",
                arn: "NA",
                status: "Filed"
              }
            ]],
            gstin: "XXXXXXXXXX",
            is_field_visit_conducted: "No",
            legal_name: "XXXXXXX PRIVATE LIMITED",
            mandate_e_invoice: "NA",
            other_business_address: {},
            primary_business_address: {
              business_nature: "Supplier of Services, Recipient of Goods or Services",
              detailed_address: "NA",
              last_updated_date: "NA",
              registered_address: "XXXXXXXX County, GREATER NOIDA, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201306"
            },
            register_cancellation_date: "",
            register_date: "31/01/XXXX",
            state_jurisdiction: "State - Uttar Pradesh,Zone - Gautambudha Nagar,Range - Gautambudha Nagar(B),Sector - Sector-1,Gautambudha Nagar (Jurisdictional Office)",
            tax_payer_type: "Regular",
            trade_name: "XXXXX PRIVATE LIMITED",
            gross_total_income: "NA",
            gross_total_income_financial_year: ""
          },
          datetime: "2023-02-24 10:45:38.430386"
        }
      },
      { 
        id: "gst-advance-v2", 
        name: "GST (Advance) V2", 
        category: "kyb",
        requestSample: {
          gst_no: "XXXXXXXXXXXX",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details from authorized sources using their GST",
          consent: "Y"
        },
        responseSample: {
          api_category: "KYB",
          api_name: "GST Verification (Advance)",
          billable: true,
          txn_id: "a62dff46-e93d-4ddc-b8b3-acdeeac1695c",
          message: "Success",
          status: 1,
          result: {
            aggregate_turn_over: "NA",
            authorized_signatory: ["XXXXXXXX", "XXXXXXXXX", "XXXXXXXXX"],
            business_constitution: "Private Limited Company",
            business_details: [
              {
                saccd: "998313",
                sdes: "Information technology (IT) consulting and support services"
              },
              {
                saccd: "998599",
                sdes: "Other support services n.e.c."
              },
              {
                saccd: "998598",
                sdes: "Other information services n.e.c."
              }
            ],
            business_nature: ["Supplier of Services", "Recipient of Goods or Services"],
            can_flag: "NA",
            central_jurisdiction: "Commissionerate - GAUTAM BUDDHA NAGAR,Division - DIVISION I GAUTAM BUDH NAGAR,Range - RANGE - 1",
            compliance_rating: "NA",
            current_registration_status: "Active",
            filing_status: [[
              {
                fy: "2022-2023",
                taxp: "January",
                mof: "ONLINE",
                dof: "11/02/2023",
                rtntype: "GSTR1",
                arn: "NA",
                status: "Filed"
              },
              {
                fy: "2022-2023",
                taxp: "January",
                mof: "ONLINE",
                dof: "16/02/2023",
                rtntype: "GSTR3B",
                arn: "NA",
                status: "Filed"
              }
            ]],
            gstin: "XXXXXXXXXX",
            is_field_visit_conducted: "No",
            legal_name: "XXXXXXX PRIVATE LIMITED",
            mandate_e_invoice: "NA",
            other_business_address: {},
            primary_business_address: {
              business_nature: "Supplier of Services, Recipient of Goods or Services",
              detailed_address: "NA",
              last_updated_date: "NA",
              registered_address: "XXXXXXXX County, GREATER NOIDA, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201306"
            },
            register_cancellation_date: "",
            register_date: "31/01/XXXX",
            state_jurisdiction: "State - Uttar Pradesh,Zone - Gautambudha Nagar,Range - Gautambudha Nagar(B),Sector - Sector-1,Gautambudha Nagar (Jurisdictional Office)",
            tax_payer_type: "Regular",
            trade_name: "XXXXX PRIVATE LIMITED",
            gross_total_income: "NA",
            gross_total_income_financial_year: "",
            business_email: "XYZ@gmail.com",
            business_mobile: "0987654432"
          },
          datetime: "2023-02-24 10:45:38.430386"
        }
      },
      { 
        id: "turnover", 
        name: "Turnover", 
        category: "kyb",
        requestSample: {
          gst_no: "37ABCPD1234E1ZI",
          year: "2024-25",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their GST data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "Turnover",
          billable: true,
          txn_id: "172452fe-8587-4665-8a8e-95b1f7da5b62",
          message: "Success",
          status: 1,
          result: {
            estimated_turnover: 1000,
            turnover: 1000,
            year: "2025-26",
            till_date: "10/10/2025",
            total_estimated_turnover: 1000,
            total_turnover: 1000,
            gst_status: "Active",
            legal_name: "RAM SINGH",
            trade_name: "ABC TECH",
            register_date: "01/01/2020",
            tax_payer_type: "Regular",
            authorized_signatory: ["RAM SINGH"],
            business_nature: ["Supplier of Services"]
          },
          datetime: "2025-08-06 06:18:55.353720"
        }
      },
      { 
        id: "gst-to-business-contact-v1", 
        name: "GST to Business Contact V1", 
        category: "kyb",
        requestSample: {
          gst_no: "XXXXXXXXXX",
          consent: "Y",
          consent_text: "I give my consent to gst contact api to get my gst contact info"
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "GST Contact",
          billable: true,
          txn_id: "13177a1d-ad18-44af-b283-8af7ea40ac35",
          message: "Success",
          status: 1,
          result: {
            business_email: "mail@mail.com",
            business_mobile: "1234567890"
          },
          datetime: "2024-03-28 05:52:27.090851"
        }
      },
      { 
        id: "gst-to-business-contact-v2", 
        name: "GST to Business Contact V2", 
        category: "kyb",
        requestSample: {
          gst_no: "12ABCPD1234E1Z1",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their GST Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "19cee83a-e517-4ed8-9d9a-b3b13b14ab3a",
          api_category: "Know Your Business (KYB)",
          api_name: "GST to Business Contact",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            business_email: "RAM@EMAIL.COM",
            business_mobile: "9876543210"
          },
          datetime: "2025-07-18 10:44:10.509562"
        }
      },
      { 
        id: "company-name-to-gst", 
        name: "Company Name to GST Lookup", 
        category: "kyb",
        requestSample: {
          company_name: "abc private limited",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their company data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "9856ef72-cd62-4018-950f-4880db0b094f",
          api_category: "Business API",
          api_name: "Company Name to GST Lookup",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            company_name: "abc private limited",
            gst_no: ["09ABCCD1234Q1AZ"]
          },
          datetime: "2025-06-19 14:38:43.673256"
        }
      },
      { 
        id: "mobile-to-gst-check", 
        name: "Mobile to GST Check", 
        category: "kyb",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "e93a5518-080e-4d00-bfe0-9087314f6085",
          api_category: "Business API",
          api_name: "Mobile to GST Check",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            exists: true
          },
          datetime: "2025-05-22 09:41:34.630565"
        }
      },
      { 
        id: "mobile-to-gst", 
        name: "Mobile to GST", 
        category: "kyb",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "I give my consent to mobile to gst api to get my gst number info"
        },
        responseSample: {
          txn_id: "a385774b-66fc-49ee-b5fb-000e5fabbc0f",
          api_category: "Know Your Business (KYB)",
          api_name: "Mobile to GST",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            gst_numbers: ["09ABCCD1234Q1AZ"]
          },
          datetime: "2025-05-22 09:41:34.630565"
        }
      },
      { 
        id: "verify-udyam", 
        name: "Verify Udyam", 
        category: "kyb",
        requestSample: {
          registration_no: "<Registration No.>"
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "Udyam",
          billable: true,
          txn_id: "e7a9b1b6-1aaa-4682-9cf8-dd3b361fa50e",
          message: "Record Found Successfully",
          status: 1,
          result: {
            enterprise_name: "LEENA BAKE",
            organisation_type: "Proprietary",
            service_type: "Services",
            gender: "Female",
            social_category: "OBC",
            date_of_incorporation: "25/12/2014",
            date_of_commencement: "25/12/2014",
            address: {
              flat_no: "FLAT NO 101",
              building: "RAVI CLASSIC , S NO 112, 113",
              village: "BANER ROAD",
              block: "NEAR D MART",
              street: "BANER",
              district: "PUNE",
              city: "PUNE",
              state: "MAHARASHTRA",
              pin: "411046"
            },
            mobile: "90*****902",
            email: "leen123@gmail.com",
            plant_details: [
              {
                unit_name: "LEENA BAKE",
                flat: "FLAT NO 101",
                building: "RAVI CLASSIC , S NO 112, 113",
                village: "BANER",
                block: " ",
                road: "BANER ROAD , NEAR D MART",
                district: "PUNE",
                city: "PUNE",
                state: "MAHARASHTRA",
                pin: "411046"
              }
            ],
            enterprise_type: [
              {
                classification_year: "2022-23",
                enterprise_type: "Micro",
                classification_date: "01/02/2022"
              }
            ],
            nic_code: [
              {
                nic_2_digit: "10 - Manufacture of food products",
                nic_4_digit: "1071 - Manufacture of bakery products",
                nic_5_digit: "10711 - Manufacture of bread",
                activity: "Manufacturing",
                date: "07/12/2022"
              }
            ],
            dic: "PUNE",
            "msme-dfo": "MUMBAI",
            date_of_udyam_registeration: "01/02/2022"
          },
          datetime: "2023-08-04 06:05:07.348376"
        }
      },
      { 
        id: "udyam-detail-v2", 
        name: "Udyam Detail V2", 
        category: "kyb",
        requestSample: {
          udyam_number: "UDYAM-UP-12-1234567",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their udyam data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "f986300f-cb98-4e6c-8c78-51f751c16d9f",
          api_category: "Know Your Business (KYB)",
          api_name: "Udyam Details V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            udyam_number: "UDYAM-UP-12-1234567",
            type_of_enterprise: "MICRO",
            major_activity: "Services",
            type_of_organisation: "Hindu Undivided Family",
            name_of_enterprise: "ABC Enterprise",
            owner_name: "Ram Singh",
            pan: "ABCPD1234D",
            do_you_have_gstin: "",
            mobile_no: "9876543210",
            email_id: "ram@email.com",
            social_category: "General",
            gender: "Male",
            specially_abled_divyang: "No",
            date_of_incorporation: "29/02/2024",
            date_of_commencement_of_production_business: "",
            male: "4",
            female: "0",
            other: "0",
            total: "4",
            dic: "Delhi",
            msme_di: "Delhi",
            date_of_udyam_registration: "10/06/2025"
          },
          datetime: "2025-07-15 12:45:44.317138"
        }
      },
      { 
        id: "mobile-to-udyam-details", 
        name: "Mobile to Udyam Details", 
        category: "kyb",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "5dcf2199-77f4-459a-b777-60fd8c38e843",
          api_category: "Know Your Business (KYB)",
          api_name: "Mobile to Udyam Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            mobile: "9876543210",
            udyam_list: [
              {
                udyam_number: "UDYAM-WB-12-7654321",
                enterprise_name: "ABC PRIVATE LIMITED",
                udyam_details: {
                  enterprise_name: "ABC PRIVATE LIMITED",
                  organisation_type: "Proprietary",
                  service_type: "Services",
                  gender: "Female",
                  social_category: "General",
                  date_of_incorporation: "01/04/2024",
                  date_of_commencement: "01/06/2024",
                  address: {
                    flat_no: "FLAT NO 101",
                    building: "RAVI CLASSIC , S NO 112, 113",
                    village: "BANER ROAD",
                    block: "CONTAI III",
                    street: "SH5",
                    district: "EAST MEDINIPUR",
                    city: "CONTAI",
                    state: "WEST BENGAL",
                    pin: "721452"
                  },
                  mobile: "98*****210",
                  email: "ramsingh@gmail.com",
                  dic: "PURBA MEDINIPUR",
                  "msme-dfo": "KOLKATA",
                  date_of_udyam_registeration: "01/01/2025",
                  status: "Success"
                }
              }
            ]
          },
          datetime: "2025-03-05 05:05:59.736667"
        }
      },
      { 
        id: "pan-to-udyam", 
        name: "PAN to Udyam", 
        category: "kyb",
        requestSample: {
          pan: "ABCPD1234E",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their pan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "4d164a28-1c84-4966-ab49-16ecdfd1fd3d",
          api_category: "Know Your Business (KYB)",
          api_name: "PAN to Udyam",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            pan: "ABCPD1234E",
            udyam_list: [
              {
                udyam_number: "UDYAM-UP-01-0123456",
                enterprise_name: "ABC PRIVATE LIMITED"
              }
            ]
          },
          datetime: "2025-03-03 09:17:12.316022"
        }
      },
      { 
        id: "pan-to-udyam-details", 
        name: "PAN to Udyam Details", 
        category: "kyb",
        requestSample: {
          pan: "ABCPD1234E",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their pan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "5360e8e5-a413-4957-b3d6-a8d92f2f14b7",
          api_category: "Know Your Business (KYB)",
          api_name: "PAN to Udyam Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            udyam_number: "UDYAM-AB-12-1234567",
            enterprise_name: "ABC COMPANY",
            organisation_type: "Proprietary",
            service_type: "TRADING",
            gender: "Male",
            social_category: "General",
            date_of_incorporation: "30/08/2006",
            date_of_commencement: "30/08/2006",
            address: {
              flat_no: "123",
              building: "abc building",
              village: "abc village",
              block: "abc block",
              street: "abc street",
              district: "abc district",
              city: "DELHI",
              state: "DELHI",
              pin: "101010"
            },
            mobile: "98*****321",
            email: "ram@email.com",
            dic: "DAVANGERE",
            "msme-dfo": "DELHI",
            date_of_udyam_registeration: "01/01/2022"
          },
          datetime: "2025-07-18 15:55:06.097306"
        }
      },
      { 
        id: "mobile-udyam-to-pan", 
        name: "Mobile & Udyam to PAN", 
        category: "kyb",
        requestSample: {
          mobile: "9000012345",
          udyam_registration_number: "UDYAM-DL-05-1234567",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile number and udyam registration number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          message: "No sample response available"
        }
      },
      { 
        id: "udyam-certificate-download", 
        name: "Udyam Certificate Download", 
        category: "kyb",
        requestSample: {
          registration_no: "UDYAM-MP-49-123456",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Udyam Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "dc7b80a6-0146-4413-b6bb-0b51d12c733d",
          api_category: "Know Your Business (KYB)",
          api_name: "Udyam Certificate Download",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            pdf_url: "<presign url of pdf file>"
          },
          datetime: "2025-04-23 14:16:50.232421"
        }
      },
      { 
        id: "udyam-assist-details", 
        name: "Udyam Assist Details", 
        category: "kyb",
        requestSample: {
          udyam_assist_number: "UDYAM-I-Cg-19-1234567",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Udyam Assist Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "1bc2236b-c2a6-4de9-a667-3ed834ec5f01",
          api_category: "Know Your Business (KYB)",
          api_name: "Udyam Assist Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            udyam_assist_number: "UDYAM-I-Cg-19-1234567",
            customer_identification_no: "CW-AWC-32654321",
            formatted_file_number: "CW-AWC-56789",
            dob: "01/01/1970",
            aadhar_reference_no: "1133422296123456789",
            entrepreneur_name: "RAM SINGH",
            organisation_type: "Proprietory",
            social_category: "General",
            gender: "Female",
            mobile: "9876543210",
            is_business_commercial: true,
            created_date: "01/03/2024"
          },
          datetime: "2025-04-23 13:21:01.098805"
        }
      },
      { 
        id: "business-pan", 
        name: "Business PAN", 
        category: "kyb",
        requestSample: {
          pan: "AAACU1234K"
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "Business PAN",
          billable: true,
          txn_id: "dc04795e-99eb-41d1-974a-b4c1d67b3ab5",
          message: "success",
          status: "1",
          result: {
            pan: "AAACU1234K",
            organisation_name: "AXIS BANK LIMITED",
            cin: "L65110GJ1993PLC12345",
            organisation_incorporate_date: "03-Dec-1900",
            director_din: "00531234",
            director_pan: "ABYPC1234D",
            organisation_email: "ram.kuriyal@axisbank.com",
            organisation_mobile: "9930541234",
            organisation_address: {
              address_line_1: "3RD FLOOR, Trishul,",
              address_line_2: "Opp Samrtheswar temple",
              address_line_3: "Ellisbridge S.O",
              address_line_4: "Ahmadabad City",
              address_line_5: "AHMEDABAD",
              pin_code: "380006",
              state: "Gujarat"
            },
            director_or_sole_proprietor_details: {
              pan_type: "director",
              pan: "ABYPC1234D",
              first_name: "RAM",
              middle_name: "",
              last_name: "CHAUDHRY",
              full_name: "RAM  CHAUDHRY",
              gender: "M",
              dob: "02-07-1900",
              email: "ram.chaudhry@yahoo.com",
              mobile: "9619011234",
              aadhaar: "XXXXXXXX4958",
              address: {
                address_line_1: "Flat No.1234",
                address_line_2: "Tower 4,Planet Godrej, KK Marg",
                address_line_3: "Mumbai",
                address_line_4: "MUMBAI",
                address_line_5: "Jacob Circle S.O",
                pin_code: "400011",
                state: "Maharashtra"
              }
            }
          },
          datetime: "2023-06-28 06:29:05.187669"
        }
      },
      { 
        id: "tan-details", 
        name: "TAN Details", 
        category: "kyb",
        requestSample: {
          tan: "MRTA01234D",
          consent_text: "I give my consent to TAN Details API to fetch my info",
          consent: "Y"
        },
        responseSample: {
          txn_id: "478bb209-9234-4c30-9831-fe783998352e",
          api_category: "Know Your Business (KYB)",
          api_name: "TAN Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            tan: "MRTA01234D",
            company_name: "ABCD PRIVATE LIMITED",
            address: {
              add_line_1: "ABC-024",
              add_line_2: "XYZ",
              add_line_3: "APPARTMENTS",
              add_line_4: "GHAZIABAD",
              add_line_5: "GHAZIABAD",
              state: "Uttar Pradesh",
              pincode: "201001",
              full: "ABC-024 XYZ APPARTMENTS GHAZIABAD GHAZIABAD Uttar Pradesh 201001"
            },
            mobile: "0123456789",
            tan_allotment_date: "06-06-2020",
            email: ["ABCD@GMAIL.COM", "XYZ@GMAIL.COM"]
          },
          datetime: "2024-06-10 13:26:09.568780"
        }
      },
      { 
        id: "fssai-verification", 
        name: "FSSAI Verification", 
        category: "kyb",
        requestSample: {
          food_license_number: "12345678XXXXX45",
          consent: "Y",
          consent_text: "I give my consent to fssai varification api to check my food licence number info"
        },
        responseSample: {
          api_category: "Know Your Business (KYB)",
          api_name: "FSSAI Verification",
          billable: true,
          txn_id: "e415702d-3ec7-48bb-8f02-8f142f3b3b4b",
          message: "Success",
          status: 1,
          result: {
            license_number: "12349015001234",
            company_name: "RAM ENTERPRISE",
            license_active_flag: false,
            license_category_name: "Registration",
            premise_address: "ABC BUILDING, MANGUSHREE COMPLEX, POST-KHANJANCHAK",
            premise_pincode: "721605",
            village_name: "WARD NO-10",
            taluka_name: "HALDIA MUNICIPALITY",
            district_name: "Purba Medinipur",
            state_name: "West Bengal",
            status_desc: "License Issued",
            uuid: "73061234"
          },
          datetime: "2024-03-12 09:48:29.258869"
        }
      },
      { 
        id: "pan-to-iec", 
        name: "PAN to IEC", 
        category: "kyb",
        requestSample: {
          pan: "CLCPK1234A",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their PAN and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "5c8a56d4-17e1-4e14-8ba8-033ce32f3f2e",
          api_category: "Know Your Business (KYB)",
          api_name: "PAN to IEC",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            iec_id: "CLCPK1234APIE000",
            iec_role: "IEC Holders",
            registration_date: "27-08-2024",
            filing_services: "IMPORTS, EXPORTS, GR",
            ie_code: "CLCPK1234AFT001",
            name: "RAM EXPORT SERVICES",
            address: "123 COLONY XYZ",
            iec_status_code: "9",
            iec_status: "Amendment",
            number_of_branches: "1",
            branches: [
              {
                branch_number: "1",
                address: "123 COLONY XYZ"
              }
            ]
          },
          datetime: "2024-10-01 11:00:15.962715"
        }
      },
      { 
        id: "mobile-to-iec", 
        name: "Mobile to IEC", 
        category: "kyb",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "11ee7d3b-a8f3-4d71-992b-f24f81f172f5",
          api_category: "Know Your Business (KYB)",
          api_name: "Mobile To IEC",
          billable: true,
          message: "Success",
          status: 1,
          result: ["0123456789"],
          datetime: "2024-12-21 10:43:22.660984"
        }
      },
      { 
        id: "pan-to-tan", 
        name: "PAN to TAN", 
        category: "kyb",
        requestSample: {
          pan: "ABCPD1234D",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their PAN and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "d2383cd6-b0a7-43c7-a34f-4061a0de3250",
          api_category: "Know Your Business (KYB)",
          api_name: "PAN to TAN",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            tan: "MRTB1234A"
          },
          datetime: "2024-10-08 07:17:57.647069"
        }
      },
      { 
        id: "pan-to-tan-v2", 
        name: "PAN to TAN V2", 
        category: "kyb",
        requestSample: {
          pan: "ABCPD1234D",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their PAN and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "687801fa-bdee-498d-8cd0-e2c7a1de1b0b",
          api_category: "Know Your Business (KYB)",
          api_name: "PAN to TAN V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            pan: "ABCPD1234D",
            tan_numbers: [
              {
                tan: "ABCD00001E",
                name: "ABC PRIVATE LIMITED"
              },
              {
                tan: "ABCD00002E",
                name: "ABC PRIVATE LIMITED"
              }
            ]
          },
          datetime: "2024-12-26 08:16:00.420495"
        }
      },
      { 
        id: "tan-to-pan", 
        name: "TAN to PAN", 
        category: "kyb",
        requestSample: {
          tan: "ABCD12345B",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their tan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "b8f8a119-4a91-4695-bd3e-32e8c92093a5",
          api_category: "Know Your Business (KYB)",
          api_name: "TAN to PAN",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            tan: "ABCD12345B",
            company_name: "ABCD PRIVATE LIMITED",
            pan: ["ABCCN4321A"]
          },
          datetime: "2024-12-06 07:33:06.838501"
        }
      },
      { 
        id: "name-to-tan", 
        name: "Name to TAN", 
        category: "kyb",
        requestSample: {
          name: "ABC PRIVATE LIMITED",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Name. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "c3376f9f-c508-4163-8deb-523ea87dbfbb",
          api_category: "Know Your Business (KYB)",
          api_name: "NAME to TAN",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "ABC PRIVATE LIMITED",
            tan_numbers: [
              {
                tan: "ABCD12345E"
              }
            ]
          },
          datetime: "2025-02-27 17:06:54.798371"
        }
      },
      { 
        id: "tds-certificate-verification", 
        name: "TDS Certificate Verification", 
        category: "kyb",
        requestSample: {
          tan: "ABCD12345C",
          pan: "ABCDP1234D",
          financial_year: "2023-24",
          tds_certificate_no: "ABCDEFG",
          tds_amount: "100",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their PAN and TAN Numbers and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "9261217d-d3b7-411d-9c47-11cca1a3f8cc",
          api_category: "Know Your Business (KYB)",
          api_name: "TDS Certificate Verification",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            tan: "ABCD12345C",
            pan: "ABCDP1234D",
            financial_year: "2023-24",
            tds_certificate_no: "ABCDEFG",
            tds_amount_deducted: "100",
            is_valid: true
          },
          datetime: "2024-12-12 15:37:45.065208"
        }
      },
      { 
        id: "iec-to-ie-details", 
        name: "IEC to IE Details", 
        category: "kyb",
        requestSample: {
          ie_code: "0011223344",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their IE Code and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "5c8a56d4-17e1-4e14-8ba8-033ce32f3f2e",
          api_category: "Know Your Business (KYB)",
          api_name: "IEC to IE Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            ie_code: "0011223344",
            name: "RAM EXPORT SERVICES",
            address: "123 COLONY XYZ",
            iec_status_code: "9",
            iec_status: "Amendment",
            number_of_branches: "1",
            branches: [
              {
                branch_number: "1",
                address: "123 COLONY XYZ"
              }
            ],
            iec_id: "CLCPK1234APIE000",
            iec_role: "IEC Holders",
            registration_date: "27-08-2024",
            filing_services: "IMPORTS, EXPORTS, GR"
          },
          datetime: "2024-10-01 11:00:15.962715"
        }
      },
      { 
        id: "iec-to-ie-details-advance", 
        name: "IEC to IE Details Advance", 
        category: "kyb",
        requestSample: {
          ie_code: "0011223344",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their IE number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "4fa0787c-7e1a-4cf0-87a0-27c4f5400dd2",
          api_category: "Know Your Business (KYB)",
          api_name: "IEC To IE Details Advance",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            iec_details: {
              iec_number: "0011223344",
              pan_number: "ABCDPE1234E",
              date_of_incorporation: "14/02/2019",
              iec_issuance_date: "06/08/2019",
              iec_status: "Valid",
              del_status: "N",
              iec_cancelled_date: "",
              iec_suspended_date: "",
              file_number: "HYDQAZWSXCDF00123456AM12",
              file_date: "Thu Jun 27 05:30:00 IST 2024",
              dgft_ra_office: "RA HYDERABAD",
              nature_of_firm: "Private Limited",
              category_of_exporters: "Manufacturer Exporter",
              firm_name: "ABC PRIVATE LIMITED",
              address: "ROAD NO.60,HYDERABAD, TELANGANA,500033",
              firm_mobile: "9876543210",
              firm_email: "email@mail.com"
            },
            branch_details: [
              {
                branch_code: "1",
                gstin: "12ABCDPE1234E1ZS",
                branch_address: "BACHUPALLY- VILLAGE, HYDERABAD,TELANGANA,500090"
              }
            ],
            proprietor_partner_director_details: [
              {
                name: "RAM SINGH",
                father_name: "SHAM SINGH",
                pan_number: "ABCPD1234H",
                address: "JUBILEEHILLS,HYDERABAD"
              }
            ]
          },
          datetime: "2025-01-18 05:25:54.628497"
        }
      },
    ],
  },
  {
    id: "mobile-360",
    name: "Mobile lookup & digital footprint",
    apis: [
      { 
        id: "mobile-lookup-basic-new", 
        name: "Mobile Lookup (Basic) New", 
        category: "mobile-360",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "82cc8857-1d8f-4758-a330-bc9845b44c27",
          api_category: "Mobile Number Lookup",
          api_name: "Mobile Lookup (Basic)",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "RAM SINGH"
          },
          datetime: "2024-11-08 18:10:47.998798"
        }
      },
      { 
        id: "mobile-lookup-supreme-new", 
        name: "Mobile Lookup (Supreme) New", 
        category: "mobile-360",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "1d382462-5e1c-4464-b9b5-555860fae2ec",
          api_category: "Mobile Number Lookup",
          api_name: "Mobile Lookup (Supreme)",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "RAM SINGH",
            bank: "Bank of India",
            branch: "MAYURVIHAR-1-NEW DELHI",
            centre: "DELHI",
            district: "DELHI",
            state: "DELHI",
            address: "MAYUR VIHAR PH-I, DELHI-91",
            contact: "+911987654321",
            imps: "TRUE",
            rtgs: "TRUE",
            city: "DELHI",
            iso3166: "IN-DL",
            neft: "TRUE",
            micr: "111234567",
            swift: ""
          },
          datetime: "2024-11-08 18:11:34.106221"
        }
      },
      { 
        id: "profile-basic", 
        name: "Profile Basic", 
        category: "mobile-360",
        requestSample: {
          mobile: "9877654321",
          first_name: "RAM",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "3eb3e2a1-5d3b-4891-ab1c-1ace91f5fd59",
          api_category: "Mobile Number Lookup",
          api_name: "Profile Basic",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            personal_information: {
              full_name: "RAM SINGH",
              gender: "Male",
              age: "20",
              date_of_birth: "1999-01-01",
              income: "987987"
            },
            alternate_phone: [
              {
                serial_number: "1",
                value: "00004311234"
              },
              {
                serial_number: "2",
                value: "00004311234"
              },
              {
                serial_number: "3",
                value: "9877654321"
              },
              {
                serial_number: "4",
                value: "01146534321"
              },
              {
                serial_number: "5",
                value: "1112011111111"
              }
            ],
            email: [
              {
                serial_number: "1",
                value: "RAM@GMAIL.COM"
              }
            ],
            address: [
              {
                detailed_address: "11 ABC COLONY  PHASE I ABC COLONY  PHASE I",
                state: "UP",
                pincode: "202001",
                type: "Primary",
                date_of_reporting: "2024-07-18"
              }
            ],
            document_data: {
              pan: [
                {
                  serial_number: "1",
                  value: "ABCPD1234D"
                }
              ]
            }
          },
          datetime: "2024-11-28 13:23:32.994616"
        }
      },
      { 
        id: "profile-advance", 
        name: "Profile Advance", 
        category: "mobile-360",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "3eb3e2a1-5d3b-4891-ab1c-1ace91f5fd59",
          api_category: "Mobile Number Lookup",
          api_name: "Profile Advance",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            personal_information: {
              full_name: "RAM SINGH",
              gender: "Male",
              age: "20",
              date_of_birth: "1999-01-01",
              income: "987987"
            },
            alternate_phone: [
              {
                serial_number: "1",
                value: "00004311234"
              },
              {
                serial_number: "2",
                value: "00004311234"
              },
              {
                serial_number: "3",
                value: "9877654321"
              },
              {
                serial_number: "4",
                value: "01146534321"
              },
              {
                serial_number: "5",
                value: "1112011111111"
              }
            ],
            email: [
              {
                serial_number: "1",
                value: "RAM@GMAIL.COM"
              }
            ],
            address: [
              {
                detailed_address: "11 ABC COLONY  PHASE I ABC COLONY  PHASE I",
                state: "UP",
                pincode: "202001",
                type: "Primary",
                date_of_reporting: "2024-07-18"
              }
            ],
            document_data: {
              pan: [
                {
                  serial_number: "1",
                  value: "ABCPD1234D"
                }
              ]
            }
          },
          datetime: "2024-11-28 13:23:32.994616"
        }
      },
      { 
        id: "mobile-to-dl-number", 
        name: "Mobile to DL Number", 
        category: "mobile-360",
        requestSample: {
          mobile: "9876543210",
          dob: "01-01-1999",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "74784bd4-88ae-4217-a701-49998edb4e6a",
          api_category: "Know Your Customer (KYC)",
          api_name: "Mobile to DL Number",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            dl: "DL01 98765432129",
            dob: "01-01-1999",
            name: "RAM SINGH",
            father_name: "SHAM SINGH"
          },
          datetime: "2025-07-01 17:36:04.566216"
        }
      },
      { 
        id: "mobile-to-director-pan", 
        name: "Mobile to Director PAN", 
        category: "mobile-360",
        requestSample: {
          mobile: "9845XXXXXX",
          consent: "Y",
          consent_text: "I give my consent to mobile to pan api to get my pan numbers"
        },
        responseSample: {
          txn_id: "9b436b5b-44b4-4ffa-a3c2-d48c59cc3dd6",
          api_category: "Mobile Number Lookup",
          api_name: "Mobile to PAN",
          billable: true,
          message: "Success",
          status: 1,
          result: "CTUPGXXXXX",
          datetime: "2024-06-04 13:37:52.528069"
        }
      },
      { 
        id: "telco-basic", 
        name: "Telco (Basic)", 
        category: "mobile-360",
        requestSample: {
          mobile: "980161XXXX"
        },
        responseSample: {
          txn_id: "a7285dc5-c00a-4c96-b42a-ca125a24fd6a",
          status: 1,
          result: {
            postpaid: false,
            Operator: "Airtel",
            Circle: "Bihar Jharkhand"
          },
          datetime: 1671245657.24426
        }
      },
      { 
        id: "telco-advance", 
        name: "Telco (Advance)", 
        category: "mobile-360",
        requestSample: {
          mobile: "800640XXXX"
        },
        responseSample: {
          txn_id: "89c9a938-45bc-4781-8900-0242f1b98204",
          api_category: "Mobile Number Lookup",
          api_name: "Telco Lookup(Advance)",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            is_valid: true,
            subscriber_status: "CONNECTED",
            connection_status: {
              status_code: "DELIVERED",
              error_code_id: ""
            },
            connection_type: "postpaid",
            msisdn: {
              msisdn_country_code: "IN",
              msisdn: "+918006401234",
              type: "MOBILE",
              mnc: "97",
              imsi: "404978006401234",
              mcc: "404",
              mcc_mnc: "40497"
            },
            current_service_provider: {
              network_prefix: "99973",
              network_name: "Airtel",
              network_region: "UP-West",
              mcc: "404",
              mnc: "97",
              country_prefix: "+91",
              country_code: "IN",
              country_name: "India"
            },
            original_service_provider: {
              network_prefix: "80064",
              network_name: "Vodafone",
              network_region: "UP-West",
              mcc: "",
              mnc: "",
              country_prefix: "+91",
              country_code: "IN",
              country_name: "India"
            },
            is_roaming: false,
            roaming_service_provider: {
              network_prefix: "",
              network_name: "",
              network_region: "",
              mcc: "",
              mnc: "",
              country_prefix: "",
              country_code: "",
              country_name: ""
            },
            is_ported: true,
            last_ported_date: null,
            porting_history: []
          },
          datetime: "2023-08-24 17:50:16.849541"
        }
      },
      { 
        id: "telco-advance-otp", 
        name: "Telco Advance (OTP Based)", 
        category: "mobile-360",
        requestSample: {
          mobile: "800640XXXX"
        },
        responseSample: {
          api_category: "Mobile Number Lookup",
          api_name: "Mobile OTP Info(Advance) - Verify OTP & Get Info",
          billable: true,
          txn_id: "ee9dcc18-ac60-4f42-a2cd-3dc0473d69ba",
          message: "Success",
          status: 1,
          result: {
            client_id: "telecom_acNgnzzbzFlbidkpuAmb",
            mobile_number: "8285231234",
            address: "C-302 Sharda Puri,Ramesh Nagar,Ramesh Nagar H O,West Delhi,Delhi,110012",
            city: "West",
            state: "Delhi",
            pin_code: "110012",
            full_name: "Ramesh",
            dob: "01-01-1992",
            user_email: "ramesh@gmail.com",
            operator: "airtel",
            billing_type: "prepaid",
            alternate_phone: "8447371234",
            is_enterprise: false,
            message: "Success"
          },
          datetime: "2023-11-09 12:28:56.412956"
        }
      },
      { 
        id: "email-verification", 
        name: "Email Verification", 
        category: "mobile-360",
        requestSample: {
          email: "abc@xyz.com",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Email and Domain data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "94ff9649-da89-449e-8f50-7f67d433406e",
          api_category: "Digital Footprint Lookup",
          api_name: "Email Verification",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            email: {
              valid_format: true,
              mx_found: true,
              deliverable: true
            },
            domain_registration_date: "19-10-2022",
            domain: "valid"
          },
          datetime: "2025-04-23 20:14:11.263170"
        }
      },
      { 
        id: "validate-whatsapp", 
        name: "Validate WhatsApp", 
        category: "mobile-360",
        requestSample: {
          mobile: "98016112XX"
        },
        responseSample: {
          txn_id: "be28f3d3-773b-42a3-b7b5-e582fed32bf7",
          api_category: "Digital Footprint Lookup",
          api_name: "Whatsapp Number Lookup",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            status: "Account Found",
            is_business: "0"
          },
          datetime: "2023-09-18 17:51:58.057192"
        }
      },
      { 
        id: "geo-location", 
        name: "Geo Location", 
        category: "mobile-360",
        requestSample: {
          ip_address: "122.170.124.0"
        },
        responseSample: {
          api_category: "Digital Footprint Lookup",
          api_name: "Geo Location",
          billable: true,
          txn_id: "d4e81a40-bc34-4fa1-a6a0-0cbdd8ffcc43",
          message: "Success",
          status: 1,
          result: {
            range: [
              2057383936,
              2057385983
            ],
            country: "IN",
            region: "DL",
            eu: "0",
            timezone: "Asia/Kolkata",
            city: "Delhi",
            ll: [
              77.2373,
              82.6542
            ],
            metro: 0,
            area: 20
          },
          datetime: "2024-04-01 13:46:16.212268"
        }
      },
      { 
        id: "geo-distance-pincode", 
        name: "Geo Distance (Pincode)", 
        category: "mobile-360",
        requestSample: {
          start_point: "101010",
          end_point: "101011"
        },
        responseSample: {
          api_category: "Digital Footprint Lookup",
          api_name: "Geo Distance(Pincode)",
          billable: true,
          txn_id: "507bb417-2189-45f4-a22a-ba4f455f86e3",
          message: "Success",
          status: 1,
          result: {
            approximate_start_address: "ABCD, 101010, India",
            approximate_end_address: "XYZ, 101011s, India",
            distance: "6.5 km"
          },
          datetime: "2025-09-25 11:05:38.059453"
        }
      },
      { 
        id: "geo-distance", 
        name: "Geo Distance", 
        category: "mobile-360",
        requestSample: {
          start_point: "28.672741, 77.359831",
          end_point: "28.626900, 77.374078"
        },
        responseSample: {
          api_category: "Digital Footprint Lookup",
          api_name: "Geo Distance",
          billable: true,
          txn_id: "034315d7-59aa-4231-a5d6-8c95bf4e6934",
          message: "Success",
          status: 1,
          result: {
            approximate_start_address: "Sahibabad Industrial Area Site 4, Rajendra Nagar, Ghaziabad, Uttar Pradesh 201005, India",
            approximate_end_address: "Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301, India",
            distance: "7.9 km"
          },
          datetime: "2024-05-13 13:39:31.289326"
        }
      },
    ],
  },
  {
    id: "utility",
    name: "Utility",
    apis: [
      { 
        id: "lpg-verification", 
        name: "LPG Verification", 
        category: "utility",
        requestSample: {
          consumer_id: "10000000034221234"
        },
        responseSample: {
          txn_id: "d4c34e98-344d-47c1-9d02-ac424c9acc92",
          api_category: "Utility Verification",
          api_name: "Verify LPG",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "Ramesh singh",
            consumer_details: {
              ConsumerRelType: "LPG",
              ConsumerCategory: "Domestic",
              MIDueDate: "02/25/2005 00:00:00",
              RelationshipUCMId: "RL000000036391234",
              ConsumerMobile: "9994451234",
              ConsumerId: "75000000512345",
              ConsumerStatus: "ACTIVE",
              TubeChangeDate: "02/25/2000 00:00:00",
              ConsumerSubStatus: "ACTIVE",
              ConsumerType: "Double Bottle Connection",
              ConsumerNo: "03197",
              TubeChangeDueDate: "02/25/2005 00:00:00"
            },
            address: {
              AddressLine3: ".",
              AddressLine2: "SURESH COLONY",
              AddressLine1: "2/1 PURUSOTHAMAN NAGAR",
              State: "Tamil Nadu",
              StateCode: "TN",
              Country: null,
              City: "KARAMADAI",
              District: "COIMBATORE",
              Pincode: "641104",
              DistrictCode: "TN002"
            },
            distributor_details: {
              DistributorCode: "0000198964",
              DistributorBacklogDays: "1",
              DistributorName: "SHREE RANGA GAS SERVICE",
              DistributorContact: "9842274096, 04254274069, 8454955555",
              DistributorAddress: {
                AddressLine3: "COIMBATORE DT.- 641104",
                AddressLine2: "KARAMADAI",
                AddressLine1: "\"188, KNP ROAD\"",
                State: null,
                StateCode: "TN",
                Country: "India",
                City: "COIMBATORE",
                District: "COIMBATORE",
                Pincode: null,
                DistrictCode: "TN002"
              }
            }
          },
          datetime: "2023-08-06 17:12:54.730613"
        }
      },
      { 
        id: "lpg-verification-mobile", 
        name: "LPG Verification (Mobile)", 
        category: "utility",
        requestSample: {
          mobile: "987687XXXX",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their Mobile Number and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "62fcbc80-adb4-41cd-9561-90dffab49cdd",
          api_category: "Utility Verification",
          api_name: "LPG Verification (Mobile)",
          billable: true,
          message: "Success",
          status: 1,
          result: [
            {
              gas_provider: "Indane Gas",
              name: "RAM KUMAR",
              consumer_details: {
                consumer_mobile: "6789999999",
                consumer_id: "7500000001234567",
                consumer_status: "ACTIVE",
                consumer_type: "Single Bottle Connection"
              },
              address: "123 ABC Colony XYZ",
              distributor_details: {
                distributor_code: "000987654",
                distributor_name: "GAYATRI INDANE SERVICE",
                distributor_contact: "1800987654",
                distributor_address: "456 MNOP Marg XYZ"
              }
            },
            {
              gas_provider: "Bharat Gas",
              name: "Sham Kumar",
              consumer_details: {
                consumer_mobile: "",
                consumer_id: "1234567890",
                consumer_status: "",
                consumer_type: ""
              },
              address: "123 ABC Colony XYZ",
              distributor_details: {
                distributor_code: "1234567",
                distributor_name: "CHANDAN GAS SERVICE",
                distributor_contact: "",
                distributor_address: ""
              }
            },
            {
              gas_provider: "HP Gas",
              name: "Sham Kumar",
              consumer_details: {
                consumer_mobile: "",
                consumer_id: "",
                consumer_status: "",
                consumer_type: ""
              },
              address: "1XX ABC Colony GXXXX 123456",
              distributor_details: {
                distributor_code: "1234567",
                distributor_name: "CHITRA GAS SERVICE",
                distributor_contact: "",
                distributor_address: ""
              }
            }
          ],
          datetime: "2024-07-19 14:31:57.759051"
        }
      },
      { 
        id: "indanegas-verification", 
        name: "IndaneGas Verification", 
        category: "utility",
        requestSample: {
          consumer_id: "75000000512345",
          mobile: "9994451234" // optional
        },
        responseSample: {
          txn_id: "d4c34e98-344d-47c1-9d02-ac424c9acc92",
          api_category: "Utility Verification",
          api_name: "Indane GAS",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "Ramesh singh",
            consumer_details: {
              ConsumerRelType: "LPG",
              ConsumerCategory: "Domestic",
              MIDueDate: "02/25/2005 00:00:00",
              RelationshipUCMId: "RL000000036391234",
              ConsumerMobile: "9994451234",
              ConsumerId: "75000000512345",
              ConsumerStatus: "ACTIVE",
              TubeChangeDate: "02/25/2000 00:00:00",
              ConsumerSubStatus: "ACTIVE",
              ConsumerType: "Double Bottle Connection",
              ConsumerNo: "03197",
              TubeChangeDueDate: "02/25/2005 00:00:00"
            },
            address: {
              AddressLine3: ".",
              AddressLine2: "SURESH COLONY",
              AddressLine1: "2/1 PURUSOTHAMAN NAGAR",
              State: "Tamil Nadu",
              StateCode: "TN",
              Country: null,
              City: "KARAMADAI",
              District: "COIMBATORE",
              Pincode: "641104",
              DistrictCode: "TN002"
            },
            distributor_details: {
              DistributorCode: "0000198964",
              DistributorBacklogDays: "1",
              DistributorName: "SHREE RANGA GAS SERVICE",
              DistributorContact: "9842274096, 04254274069, 8454955555",
              DistributorAddress: {
                AddressLine3: "COIMBATORE DT.- 641104",
                AddressLine2: "KARAMADAI",
                AddressLine1: "\"188, KNP ROAD\"",
                State: null,
                StateCode: "TN",
                Country: "India",
                City: "COIMBATORE",
                District: "COIMBATORE",
                Pincode: null,
                DistrictCode: "TN002"
              }
            }
          },
          datetime: "2023-08-06 17:12:54.730613"
        }
      },
      { 
        id: "hpgas-verification", 
        name: "HPGas Verification", 
        category: "utility",
        requestSample: {
          consumer_id: "29110XXXXXXXXXXXX",
          mobile: "90527XXXXX", // optional
          consent: "Y",
          consent_text: "I give my consent to HP Gas API to fetch my info"
        },
        responseSample: {
          txn_id: "84b14440-7a5e-4729-bb86-4e31b0f1e27e",
          api_category: "Utility Verification",
          api_name: "HP Gas",
          status: 1,
          result: {
            name: "XXXXXXXXX Kumar",
            address: "26******* NE***** 52**04"
          },
          datetime: 1672920469.393581
        }
      },
      { 
        id: "bharatgas-verification", 
        name: "BharatGas Verification", 
        category: "utility",
        requestSample: {
          consumer_id: "100000000XXXXXXXX",
          mobile: "8006XXXXXX", // optional
          consent: "Y",
          consent_text: "I give my consent to Bharat Gas API to fetch my info"
        },
        responseSample: {
          txn_id: "a6461dc0-7f0d-4ff4-9743-793649e08b52",
          api_category: "Utility Verification",
          api_name: "Bharat GAS",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "KRXXXX",
            consumer_details: {
              ConsumerNo: "XXXX",
              ConsumerId: "10000XXXXXXXXXX"
            },
            address: "1/61X SAXXXXX NXXX, CHXXXXX",
            distributor_details: {
              DistributorCode: "XXXXX",
              DistributorName: " SRI VEXXXX SXXXX GAS AGENCIES "
            }
          },
          datetime: "2024-06-07 14:57:48.086824"
        }
      },
      { 
        id: "details-check", 
        name: "Details Check", 
        category: "utility",
        requestSample: {
          reference_parameter: "30a713cf-c2d1-4a7f-8232-b884b130sxd3",
          api_code: "8UQaz1",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their reference parameter value. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "cb473a59-837f-4d03-9d88-6da19993c355",
          api_category: "Utility",
          api_name: "Details Check",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            api_category: "KYC",
            api_name: "Face Match",
            billable: true,
            txn_id: "30a713cf-c2d1-4a7f-8232-b884b130sxd3",
            message: "Success",
            status: 1,
            result: {
              similarrity: "100"
            },
            datetime: "2025-03-06 07:37:47.582480"
          },
          datetime: "2025-03-06 07:37:55.390821"
        }
      },
    ],
  },
  {
    id: "fraud-check",
    name: "Fraud Check",
    apis: [
      { 
        id: "pan-to-masked-aadhaar", 
        name: "PAN to Masked Aadhaar", 
        category: "fraud-check",
        requestSample: {
          pan_number: "ABCPD0809B"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "PAN to Aadhaar",
          billable: true,
          txn_id: "4037f3a0-71c1-4c6f-b03c-14b2e7efc7fc",
          message: "Record Found",
          status: 1,
          result: {
            aadhaar_number: "XXXXXXXX0809",
            pan: "ABCPD0809B"
          },
          datetime: "2024-04-15 06:27:36.294713"
        }
      },
      { 
        id: "aadhaar-to-pan", 
        name: "Aadhaar to PAN", 
        category: "fraud-check",
        requestSample: {
          aadhaar: "68685669XXXX"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "Aadhaar to PAN",
          billable: true,
          txn_id: "c31637f9-611d-448c-bd71-3446b5aa81fc",
          message: "Record Found",
          status: 1,
          result: {
            aadhaar: "42346856691234",
            pan: "DKYPK1234G"
          },
          datetime: "2024-02-17 06:43:52.710286"
        }
      },
      { id: "aadhaar-validation-lite", name: "Aadhaar Validation Lite", category: "fraud-check" },
      { id: "mobile-age", name: "MobileAge", category: "fraud-check" },
      { id: "mobile-revoke", name: "Mobile Revoke", category: "fraud-check" },
      { 
        id: "mobile-revoke-v2", 
        name: "Mobile Revoke V2", 
        category: "fraud-check",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Mobile Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "e3d8bccb-7043-4152-b944-1a28db633a01",
          api_category: "Fraud Check",
          api_name: "Mobile Revoke V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            revoke_status: "Yes",
            revoke_history: [
              {
                revoke_date: "08/2020"
              },
              {
                revoke_date: "10/2021"
              }
            ],
            revoke_history_count: 2
          },
          datetime: "2025-03-07 10:19:23.180321"
        }
      },
      { 
        id: "mobile-360-util", 
        name: "Mobile 360", 
        category: "fraud-check",
        requestSample: {
          mobile: "7060123456",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "77d89227-0dbd-4778-8cfb-e224df2a80a6",
          api_category: "Fraud Check",
          api_name: "Mobile 360",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            digital_payment_id_info: {
              code: "SUC",
              data: {
                name: "Ramesh Kumar",
                branch: "Noida Branch",
                address: "B-121, Sector-5,Noida-201301",
                state: "UTTAR PRADESH",
                contact: "+911133996699",
                city: "NOIDA",
                centre: "Gautam Buddh Nagar",
                district: "Gautam Buddh Nagar",
                bank: "Paytm Payments Bank"
              }
            },
            lpg_info: {
              code: "SUC",
              data: [
                {
                  gas_provider: "Indane Gas",
                  name: "RAM KUMAR",
                  consumer_details: {
                    consumer_mobile: "6789999999",
                    consumer_id: "7500000001234567",
                    consumer_status: "ACTIVE",
                    consumer_type: "Single Bottle Connection"
                  },
                  address: "123 ABC Colony XYZ",
                  distributor_details: {
                    distributor_code: "000987654",
                    distributor_name: "GAYATRI INDANE SERVICE",
                    distributor_contact: "1800987654",
                    distributor_address: "456 MNOP Marg XYZ"
                  }
                }
              ]
            },
            msme_info: {
              code: "SUC",
              data: [
                {
                  udyam_number: "UDYAM-MH-11-12345678",
                  enterprise_name: "M/S Ramesh Electronics"
                }
              ]
            },
            epfo_info: {
              code: "SUC",
              data: [
                "100004314123"
              ]
            },
            director_pan_info: {
              code: "SUC",
              data: [
                "ABCPD1234E"
              ]
            },
            telco_info: {
              code: "SUC",
              data: {
                is_valid: true,
                subscriber_status: "CONNECTED",
                connection_status: {
                  status_code: "DELIVERED",
                  error_code_id: ""
                },
                connection_type: "prepaid"
              }
            },
            mobile_age_info: {
              code: "SUC",
              data: {
                is_ported: "Yes",
                mobile_age: "15 to 16 Years",
                number_active: "Yes",
                number_valid: "Yes",
                ported_region: " Delhi",
                ported_telecom: "Airtel ",
                region: " Delhi",
                roaming: "No",
                telecom: "Vodafone "
              }
            },
            gst_list: {
              code: "SUC",
              data: [
                "27ABCPD1234E1ZN"
              ]
            },
            whatsapp_info: {
              code: "SUC",
              data: {
                status: "Account Found",
                is_business: "0"
              }
            },
            revoke_info: {
              code: "SUC",
              data: {
                revoke_date: "",
                revoke_status: "No"
              }
            },
            key_highlights: {
              digital_payment_id_name: "Ramesh Kumar",
              gas_connection_found: "Yes",
              udyam_numbers: [
                "UDYAM-MH-11-12345678"
              ],
              gst_numbers: [
                "27ABCPD1234E1ZN"
              ],
              connection_type: "prepaid",
              whatsapp_business_account_status: "Non-business",
              age_of_mobile: "15 to 16 Years",
              active_status: "Yes",
              revoke_date: ""
            }
          },
          datetime: "2024-12-24 07:15:53.410807"
        }
      },
      { 
        id: "e-stamp-certificate", 
        name: "E-stamp Certificate Verification", 
        category: "fraud-check",
        requestSample: {
          state: "Uttar Pradesh",
          certificate_no: "IN-UP54321123456789W",
          stamp_duty_type: "Agreement or Memorandum of an agreement",
          issued_date: "25-Nov-2024",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their E-Stamping data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "d68f77d7-5624-45a6-9535-e85c694200af",
          api_category: "Fraud Check",
          api_name: "E-stamp Certificate Verification",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            type: "This is a base certificate.",
            note: "This certificate has been generated 21 days ago.",
            status: "Not Locked"
          },
          datetime: "2024-12-16 09:32:58.101356"
        }
      },
      { id: "tampering-check", name: "Tampering Check", category: "fraud-check" },
      { 
        id: "address-tracing", 
        name: "Address Tracing", 
        category: "fraud-check",
        requestSample: {
          mobile: "98876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Mobile Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "9633fa4a-0080-492d-a166-98f616b19980",
          api_category: "Fraud Check",
          api_name: "Address Tracing",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            mobile: "98876543210",
            addresses: [
              {
                address1: "1-ABC",
                address2: "1st Floot",
                email: "ram@email.com",
                fname: "RAM",
                lname: "SINGH",
                mobile: "98876543210",
                city: "Delhi",
                state: "Delhi",
                pincode: "101010",
                country: "India",
                country_code: "IN",
                state_code: "DL",
                isd_code: "+91",
                is_primary: 1,
                last_delivery_at: null,
                type: "home",
                tags: "home",
                created_at: "2025-01-01T12:38:17.487Z",
                updated_at: "2025-01-01T12:38:17.487Z"
              }
            ]
          },
          datetime: "2025-07-18 16:01:17.486133"
        }
      },
      { 
        id: "buying-capacity", 
        name: "Buying Capacity", 
        category: "fraud-check",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "c20711ba-5108-47d8-bfc4-a283125bdab8",
          api_category: "Fraud Check",
          api_name: "Buying Capacity",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            total_orders: "2",
            average_order_value: "999",
            total_order_value: "1998",
            cod_percentage: "100",
            prepaid_percentage: "0",
            delivery_success_rate: "0",
            order_categories_12_mon: {
              clothing_and_accessories: {
                orders: 2
              }
            },
            total_order_value_12_mon: "1998",
            total_orders_12_mon: "2"
          },
          datetime: "2025-08-18 06:59:31.459096"
        }
      },
      { id: "bank-statement-analysis-v2", name: "Bank Statement Analysis V2", category: "fraud-check" },
    ],
  },
  {
    id: "financial-check",
    name: "Financial Check",
    apis: [
      { 
        id: "bank-account-penny-drop", 
        name: "Bank Account Verification (Penny Drop)", 
        category: "financial-check",
        requestSample: {
          account_number: "XXXXXXXXXXXX",
          ifsc: "FDRL0001001",
          name: "RAM"
        },
        responseSample: {
          result: {
            bank_ref_no: "308317961234",
            beneficiary_name: "RAM KUMAR",
            transaction_remark: "Transaction Successful",
            verification_status: "VERIFIED",
            name_match: {
              name_match_status: "yes",
              name_match_score: "86"
            },
            ifsc_info: {
              MICR: "682041234",
              BRANCH: "ALUVA BANK JUNCTION",
              STATE: "KERALA",
              CONTACT: "+914842612345",
              UPI: true,
              RTGS: true,
              CITY: "ERNAKULAM",
              CENTRE: "ALUVA",
              DISTRICT: "ALUVA",
              NEFT: true,
              IMPS: true,
              SWIFT: null,
              ISO3166: "IN-KL",
              BANK: "Federal Bank",
              BANKCODE: "FDRL",
              IFSC: "FDRL1234567",
              pincode: ""
            }
          },
          datetime: "2023-03-24 12:27:33.076357"
        }
      },
      { 
        id: "bank-account-penny-less", 
        name: "Bank Account Verification (Penny Less)", 
        category: "financial-check",
        requestSample: {
          account_no: "XXXXXXXXXXXX",
          ifsc_code: "XXXXXXXX",
          name: "XXX XXX", // optional
          consent: "Y",
          consent_text: "I give my consent to Bank Account Verification (Penny Less) api to check my bank details"
        },
        responseSample: {
          txn_id: "4cacdd41-982a-4f22-bf24-039a7847fd60",
          api_category: "Financial Check",
          api_name: "Bank Account Verification (Penny Less)",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            account_status: "SUCCESS",
            details: {
              bank_reference: "XXXXXXXX",
              ifsc: "XXXXXXX",
              registered_name: "XXX XXX"
            },
            name_match: {
              match_result: "yes",
              nameMatchScore: "100.00"
            }
          },
          datetime: "2024-04-08 11:22:34.718812"
        }
      },
      { 
        id: "experian", 
        name: "Experian", 
        category: "financial-check",
        requestSample: {
          name: "RAM SINGH",
          mobile: "9876543210",
          pan: "ABCPD1234E",
          consent_text: "We confirm obtaining valid customer consent to access/process their credit report. Consent remains valid, informed, and unwithdrawn.",
          consent: "Y"
        },
        responseSample: {
          txn_id: "3eb6af77-0f0b-4732-b804-e158de128471",
          api_category: "Financial Checks",
          api_name: "Experian",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "RAM SINGH",
            mobile: "9876543210",
            pan: "ABCPD1234E",
            credit_score: 759,
            credit_report: {
              CreditProfileHeader: {
                ReportDate: 20250520,
                ReportTime: 150911,
                Version: "V2.4",
                ReportNumber: 1747733876789
              },
              CAIS_Account: {
                CAIS_Summary: {
                  Credit_Account: {
                    CreditAccountTotal: "2",
                    CreditAccountActive: "1",
                    CreditAccountDefault: "0",
                    CreditAccountClosed: "1"
                  },
                  Total_Outstanding_Balance: {
                    Outstanding_Balance_Secured: "21234",
                    Outstanding_Balance_All: "21234"
                  }
                }
              },
              SCORE: {
                FCIREXScore: 999
              }
            }
          },
          datetime: "2025-05-20 09:39:09.895971"
        }
      },
      { 
        id: "digital-payment-id-analyser", 
        name: "Digital Payment ID Analyser", 
        category: "financial-check",
        requestSample: {
          digital_payment_id: "9876543210@ybl",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their digital payment id data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "7cddc1ef-bb88-41b8-84b6-a1d4c43ebf20",
          api_category: "Financial Checks",
          api_name: "Digital Payment ID Analyser",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "RAM SINGH",
            bank: "Bank of India",
            branch: "MAYURVIHAR-1-NEW DELHI",
            centre: "DELHI",
            district: "DELHI",
            state: "DELHI",
            address: "MAYUR VIHAR PH-I, DELHI-91",
            contact: "+911987654321",
            imps: "TRUE",
            rtgs: "TRUE",
            city: "DELHI",
            iso3166: "IN-DL",
            neft: "TRUE",
            micr: "111234567",
            swift: ""
          },
          datetime: "2024-11-08 18:18:21.319667"
        }
      },
      { 
        id: "mobile-to-account-number", 
        name: "Mobile to Account Number", 
        category: "financial-check",
        requestSample: {
          mobile: "987654321",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "3fc93293-97ed-42e8-8320-3c7ebb1e57de",
          api_category: "Financial Check",
          api_name: "Mobile to Account Number",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            account_details: {
              account_ifsc: "BARB0AZSXDC",
              account_number: "27520987654321",
              amount_deposited: "1.00"
            },
            vpa_details: {
              account_holder_name: "RAM SINGH",
              name_match: "",
              name_match_score: "",
              vpa: "ramsingh@paypay"
            }
          },
          datetime: "2025-02-05 13:35:43.959524"
        }
      },
      { 
        id: "digital-payment-to-account", 
        name: "Digital Payment ID to Account Number", 
        category: "financial-check",
        requestSample: {
          digital_payment_id: "name@payment",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Payment ID data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "5c4c91ad-35f5-4a69-af8a-04e73dcfc84f",
          api_category: "Financial Check",
          api_name: "Digital Payment ID to Account Number",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            account_details: {
              account_ifsc: "ABCD0000123",
              account_number: "12345678901234",
              amount_deposited: "1.00"
            },
            digital_payment_details: {
              account_holder_name: "RAM SINGH",
              digital_payment_id: "name@payment"
            }
          },
          datetime: "2025-03-03 16:10:05.576428"
        }
      },
      { 
        id: "pan-to-account-linkage", 
        name: "PAN to Account Linkage Check", 
        category: "financial-check",
        requestSample: {
          account_number: "12345670098765",
          ifsc: "AZXS0MQASW",
          pan: "ABCPD1234E",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their PAN IFSC and Account data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "e55b3b10-7671-460c-a6da-b4179de8ed66",
          api_category: "Financial Check",
          api_name: "PAN to Account Linkage Check",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            linked_status: true,
            message: "PAN and Account number are linked",
            pan: "ABCPD1234E",
            account_number: "12345670098765",
            ifsc_code: "AZXS0MQASW",
            account_holder: "PRIMARY",
            account_type: "SAVINGS",
            account_nature: "SINGLE"
          },
          datetime: "2025-04-30 18:02:10.500377"
        }
      },
      { 
        id: "digital-payment-id-verification", 
        name: "Digital Payment ID Verification (Basic)", 
        category: "financial-check",
        requestSample: {
          digital_payment_id: "9876543210@ybl",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their digital payment id data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "9eb5eb1a-94de-4916-addb-dca456c636e8",
          api_category: "Financial Checks",
          api_name: "Digital Payment ID Verification (Basic)",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            name: "RAM SINGH"
          },
          datetime: "2024-11-08 23:02:45.108561"
        }
      },
      { 
        id: "ifsc-to-branch-details", 
        name: "IFSC to Branch Details", 
        category: "financial-check",
        requestSample: {
          ifsc: "BANK0000001",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their IFSC. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "3e980a4a-083f-4495-81ac-781db8913efd",
          api_category: "Financial Check",
          api_name: "IFSC to Branch Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            bank: "Bank",
            ifsc: "BANK0000001",
            branch: "DIST W GODAVARI",
            centre: "WEST GODAVARI",
            district: "WEST GODAVARI",
            state: "ANDHRA PRADESH",
            address: "DEVARAPALLI MANDAL,DUDDUKURU, DIST-W.GODAVARI, A.P.534313",
            contact: "+910221800123456",
            imps: "TRUE",
            rtgs: "TRUE",
            city: "DUDDUKURU",
            iso3166: "IN-AP",
            neft: "TRUE",
            micr: "987654321",
            upi: "TRUE"
          },
          datetime: "2025-08-12 06:39:22.662822"
        }
      },
    ],
  },
  {
    id: "vehicle-verification",
    name: "Vehicle Verification",
    apis: [
      { 
        id: "rc-advance", 
        name: "RC (Advance)", 
        category: "vehicle-verification",
        requestSample: {
          vehicle_no: "BR02AVXXXX"
        },
        responseSample: {
          txn_id: "d23bcca0-7794-4bdb-877a-4c2285ff23c9",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            owner: "MANISH KUMAR",
            ownerNumber: "1",
            ownerFathersName: "CHANDAN SINGH",
            presentAddress: "999102062 MAULATI TEH. NARWANA Jind Haryana 126123",
            permanentAddress: "999102062 MAULATI TEH. NARWANA Jind Haryana 126123",
            registrationDetail: {
              blacklistStatus: "NA",
              rcStatusAsOn: "27/04/2023",
              rcStatus: "ACTIVE",
              authority: "NARWANA, Haryana",
              RTOCode: "HR-32",
              date: "01/06/2018",
              expiryDate: "31/05/2033",
              number: "HR32K1111",
              nocDetails: "NA",
              taxUpto: "NA"
            },
            hypotecationDetail: {
              isFinanced: true,
              financier: "HERO FINCORP LTD"
            },
            vehicle: {
              number: "HR32K1111",
              fuelType: "PETROL",
              normsDesc: "BHARAT STAGE IV",
              vehicleMMV: "HERO MOTOCORP LTD HF DELUXE (I3S-SELF-DRUM-CAST)",
              companyName: "HERO MOTOCORP LTD",
              modelName: "HF DELUXE (I3S-SELF-DRUM-CAST)",
              category: "2WN",
              color: "RBK",
              chassis: "MBLHAR236JHC31234",
              class: "M-Cycle/Scooter(2WN)",
              engine: "HA11ENJHC07263",
              manufacturingDate: "3/2018",
              cubicCapacity: "97",
              grossWeight: "239",
              unladenWeight: "109",
              noCyl: "1",
              seatCap: "2",
              wheelBase: "1235"
            },
            insurance: {
              policyNumber: "39010231176205041234",
              company: "N SURE PLUS",
              validTill: "20/03/2023"
            },
            pucc: {
              number: "NA",
              upto: "NA"
            },
            mmvResponse: null
          },
          datetime: "2023-04-27 17:38:36.556870"
        }
      },
      { 
        id: "rc-advance-v2", 
        name: "RC (Advance - V2)", 
        category: "vehicle-verification",
        requestSample: {
          vehicle_no: "DL3SFF1234",
          chasis_no: "M5ECHAMCR12345678" // optional
        },
        responseSample: {
          txn_id: "f8eb4905-b07a-4ff1-ae1f-7b2d31d667a3",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            blacklist_status: "NA",
            body_type_description: "2WN",
            chassis_number: "MB8DP12DKN8D81234",
            father_name: "SURESH KUMAR",
            financer: "",
            insurance: {
              company: "GO DIGIT GENERAL INSURANCE LTD",
              expiry_date: "2027-11-24",
              policy_number: "D083741234"
            },
            user_name: "MANISH KUMAR",
            registration_date: "01-Dec-2020",
            registration_number: "DL3SFF1234",
            vehicle_make_model: "ACCESS 125",
            vehicle_maker_description: "SUZUKI MOTORCYCLE INDIA PVT LTD",
            vehicle_age: "0 years 8 months",
            challan_details: [
              {
                offence_id: 4571,
                offence_name: "Jumping Red Light",
                officer_designation: "ASI",
                mva: "184 MVA",
                penalty: 0,
                challan_no: "DL126249230315161234",
                date_time: "2023-03-15 16:27:14",
                payment_date: null,
                challan_status: "Pending"
              }
            ]
          },
          datetime: "2023-08-08 18:33:06.079385"
        }
      },
      { 
        id: "rc-advance-v3", 
        name: "RC (Advance - V3)", 
        category: "vehicle-verification",
        requestSample: {
          vehicle_no: "DL1ABC1234",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their RC Number and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "b504bb9e-c46d-48ac-ac27-99e4fc77e24b",
          api_name: "RC (Advance - V3)",
          api_category: "Vehicle Verification",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            registration_number: "DL1ABC1234",
            registration_date: "12/12/2012",
            vehicle_owner_number: 1,
            user_name: "RAM SINGH",
            father_name: "SHAM SINGH",
            user_present_address: "A/1 ABC Colony Uttar Pradesh 228155 ",
            mobile: "9876543210",
            vehicle_class_description: "e-Rickshaw(P)",
            chassis_number: "M80SEABC22L001234",
            engine_number: "SAZXS000123456",
            vehicle_maker_description: "RAM AUTO PVT LTD",
            vehicle_make_model: "MAYURI PRO",
            financer: {
              hp_type: "HT",
              financer_name: "ABC PRIVATE LIMITED",
              financer_full_address: "ABC PRIVATE LIMITED, UP, 228001"
            },
            insurance: {
              policyNumber: "123456/12/12/006876",
              company: "ABCD Insurance Co. Ltd.",
              validTill: "09/07/2025",
              validFrom: "10/07/2024"
            },
            status: "ACTIVE",
            vehicle_financed: true
          },
          datetime: "2024-08-04 11:40:29.761948"
        }
      },
      { 
        id: "fastag-details", 
        name: "Fastag Details", 
        category: "vehicle-verification",
        requestSample: {
          vehicle_no: "DL3SFF1234"
        },
        responseSample: {
          txn_id: "02c1c0a2-a317-4fb8-89ea-327982a9e010",
          api_category: "Vehicle Verification",
          api_name: "FasTag Details",
          billable: true,
          message: "Success",
          status: 1,
          result: [
            {
              tag_id: "1234XXXXXXXXXXXXXXXXAB00",
              vehicle_no: "DL3SFF1234",
              status: "ACTIVE",
              vehicle_class: "VC4",
              issue_date: "2020-09-01",
              issue_bank: "ABCD Bank"
            },
            {
              tag_id: "1234XXXXXXXXXXXXXXXXAB11",
              vehicle_no: "DL3SFF1234",
              status: "INACTIVE",
              vehicle_class: "XYZ",
              issue_date: "2020-09-01",
              issue_bank: "ABCD Bank"
            }
          ],
          datetime: "2024-03-29 06:45:43.491177"
        }
      },
      { 
        id: "challan-details", 
        name: "Challan Details", 
        category: "vehicle-verification",
        requestSample: {
          vehicle_no: "DL3SFF1234",
          consent: "Y",
          consent_text: "I give my consent to challan-details api to check my challan details"
        },
        responseSample: {
          txn_id: "680c69ed-c153-48a2-b1ff-db9ad69628e4",
          api_category: "Vehicle Verification",
          api_name: "Challan Details",
          billable: true,
          message: "Success",
          status: 1,
          result: [
            {
              pdfUrl: "https://url.com",
              recieptUrl: "",
              number: 1,
              challan_number: "UP173997231123456789",
              offense_details: "Driving Two-wheeled without helmets",
              challan_place: null,
              challan_date: "2022-12-23 11:11:11",
              state: "UP",
              rto: null,
              accused_name: "RAM KUMAR SHAM",
              amount: 1000,
              challan_status: "Pending",
              court_challan: true
            }
          ],
          datetime: "2024-04-08 10:31:55.682051"
        }
      },
      { 
        id: "transaction-id-to-vehicle-tax", 
        name: "Transaction ID to New Vehicle Tax Details", 
        category: "vehicle-verification",
        requestSample: {
          transaction_id: "ABY2501018739876",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their challan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "b845cb1a-9c3c-4b91-9eea-064d768f170c",
          api_category: " Vehicle Verification",
          api_name: "Transaction ID to New Vehicle Tax Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            transaction_id: "ABY2501018739876",
            tax_details: [
              {
                sl_no: "1",
                vehicle_no: "AB08FP9865",
                application_no: "ABY2501018739876",
                transaction_no_auin: "ABY2501018731234",
                payment_id: "AB8T250100000001",
                payment_date: "01-01-2025 10:58 AM",
                payment_conf_date: "01-01-2025 10:59 AM",
                payment_gateway: "IFMS",
                bank_ref_no: "CHS0132435",
                grn: "15251324",
                cin: "22020123689",
                amount: "6000",
                status: "Success",
                status_description: "successfully completed"
              }
            ]
          },
          datetime: "2025-05-21 13:35:38.008369"
        }
      },
      { 
        id: "chassis-to-rc-number", 
        name: "Chassis To RC Number", 
        category: "vehicle-verification",
        requestSample: {
          chassis_no: "MBLJAW123MNB12345",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Chassis Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "4adebbfc-339e-4fdb-ad6f-9724bb2ceae9",
          api_category: "Vehicle Verification",
          api_name: "Chassis To RC Number",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            vehicle_no: "DL01H1234"
          },
          datetime: "2025-03-11 09:09:35.066935"
        }
      },
      { 
        id: "chassis-to-rc-number-v2", 
        name: "Chassis To RC Number V2", 
        category: "vehicle-verification",
        requestSample: {
          chassis_no: "MBLJAW123MNB12345",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Chassis Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "bdedec37-1022-4e23-9d09-5b648d18d2a8",
          api_category: "Vehicle Verification",
          api_name: "Chassis To RC Number V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            vehicle_no: "DL01H1234"
          },
          datetime: "2025-03-11 09:42:06.407569"
        }
      },
      { 
        id: "chassis-to-rc", 
        name: "Chassis to RC", 
        category: "vehicle-verification",
        requestSample: {
          chassis_no: "MA3EWB22SJEXXXXXX",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details from authorized sources using Chassis Number."
        },
        responseSample: {
          txn_id: "6cbb6737-287e-4067-b582-5e306b33303c",
          api_category: "Vehicle Verification",
          api_name: "RC from Chassis",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            blacklist_status: "NA",
            body_type_description: "",
            chassis_number: "MA3EWB22SJEXXXXXX",
            father_name: "XXXX",
            financer: "NA",
            insurance: {
              policyNumber: "NA",
              company: "Acko General Insurance Limited",
              validTill: "01/08/2024"
            },
            registration_date: "02/08/2018",
            registration_location: "BENGALURU EAST  RTO, Karnataka",
            registration_number: "KA03NDXXXX",
            status: "ACTIVE",
            user_name: "XXXXX",
            vehicle_make_model: "MARUTI BALENO DELTA(AUTOMATIC",
            vehicle_maker_description: "MARUTI SUZUKI INDIA LTD",
            vehicle_financed: true
          },
          datetime: "2024-06-25 09:32:35.881465"
        }
      },
      { 
        id: "chassis-to-rc-v2", 
        name: "Chassis to RC V2", 
        category: "vehicle-verification",
        requestSample: {
          chassis_no: "MBLJAW141MHC21171",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their Chassis Number. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "6cbb6737-287e-4067-b582-5e306b33303c",
          api_category: "Vehicle Verification",
          api_name: "RC from Chassis V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            blacklist_status: "NA",
            body_type_description: "",
            chassis_number: "MA3EWB22SJEXXXXXX",
            father_name: "SHAM SINGH",
            financer: "NA",
            insurance: {
              policyNumber: "NA",
              company: "Acko General Insurance Limited",
              validTill: "01/08/2024"
            },
            registration_date: "02/08/2018",
            registration_location: "BENGALURU EAST  RTO, Karnataka",
            registration_number: "DL01AV0001",
            status: "ACTIVE",
            user_name: "RAM SINGH",
            vehicle_make_model: "MARUTI BALENO DELTA(AUTOMATIC",
            vehicle_maker_description: "MARUTI SUZUKI INDIA LTD",
            vehicle_financed: true
          },
          datetime: "2024-06-25 09:32:35.881465"
        }
      },
      { 
        id: "new-vehicle-tax-details", 
        name: "New Vehicle Tax Details", 
        category: "vehicle-verification",
        requestSample: {
          type: "transaction_id/payment_id/grn_no/bank_ref_no",
          value: "DL12T12320000123",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their challan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "b845cb1a-9c3c-4b91-9eea-064d768f170c",
          api_category: " Vehicle Verification",
          api_name: "Transaction ID to New Vehicle Tax Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            transaction_id: "ABY2501018739876",
            tax_details: [
              {
                sl_no: "1",
                vehicle_no: "AB08FP9865",
                application_no: "ABY2501018739876",
                transaction_no_auin: "ABY2501018731234",
                payment_id: "AB8T250100000001",
                payment_date: "01-01-2025 10:58 AM",
                payment_conf_date: "01-01-2025 10:59 AM",
                payment_gateway: "IFMS",
                bank_ref_no: "CHS0132435",
                grn: "15251324",
                cin: "22020123689",
                amount: "6000",
                status: "Success",
                status_description: "successfully completed"
              }
            ]
          },
          datetime: "2025-05-21 13:35:38.008369"
        }
      },
    ],
  },
  {
    id: "profession-check",
    name: "Profession Check",
    apis: [
      { id: "uan-passbook", name: "UAN Passbook", category: "profession-check" },
      { 
        id: "uan-validation", 
        name: "UAN Validation", 
        category: "profession-check",
        requestSample: {
          uan: "123456789012",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their UAN data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          api_category: "Employment",
          api_name: "UAN Validation",
          billable: true,
          txn_id: "c31099b7-c7d4-436c-9d84-5f06c58a71aa",
          message: "Success",
          status: 1,
          result: {
            uan: "123456789012",
            is_valid: true
          },
          datetime: "2024-12-11 14:57:04.278763"
        }
      },
      { 
        id: "mobile-to-uan-lookup", 
        name: "Mobile to UAN Lookup", 
        category: "profession-check",
        requestSample: {
          mobile: "98016146XXX"
        },
        responseSample: {
          api_category: "UAN",
          api_name: "Mobile to UAN",
          billable: true,
          txn_id: "e843b87b-2bc1-47e8-ae63-05c9e4c4cc77",
          message: "Success",
          status: 1,
          result: {
            uan: "100004314123"
          },
          datetime: "2023-05-18 03:38:14.169701"
        }
      },
      { 
        id: "pan-to-uan-lookup", 
        name: "PAN to UAN Lookup", 
        category: "profession-check",
        requestSample: {
          pan: "ABCDEF1234G"
        },
        responseSample: {
          api_category: "UAN",
          api_name: "PAN to UAN",
          billable: true,
          txn_id: "aad8d1d4-de48-4b6e-8d96-6d68bd82e298",
          message: "Success",
          status: "1",
          result: {
            pan: "ABCDEF1234G",
            uan: "100415012345"
          },
          datetime: "2024-02-28 10:16:29.575878"
        }
      },
      { 
        id: "aadhaar-to-uan-lookup", 
        name: "Aadhaar to UAN Lookup", 
        category: "profession-check",
        requestSample: {
          aadhaar: "346987654321"
        },
        responseSample: {
          api_category: "UAN",
          api_name: "Aadhaar to UAN",
          billable: true,
          txn_id: "c0c699fc-949a-4882-8171-ba1943910985",
          message: "Success",
          status: 1,
          result: {
            aadhaar: "346987654321",
            uan: "102012345678"
          },
          datetime: "2024-04-26 09:25:19.971378"
        }
      },
      { 
        id: "uan-history", 
        name: "UAN History", 
        category: "profession-check",
        requestSample: {
          uan: "10000431XXXX"
        },
        responseSample: {
          txn_id: "16ed1938-a85c-43a8-aa26-db68010b4e7e",
          api_category: "Employment history",
          api_name: "UAN",
          billable: true,
          message: "Record found successfully",
          status: 1,
          result: {
            name: "RAMESH KUMAR",
            dob: "01/01/1900",
            employment_history: [
              {
                company_name: "THOMSON DIGITAL",
                company_address: "129, NSEZ, NOIDA, GAUTAM BUDDHA NAGAR, NOIDA, UTTAR PRADESH, 201305"
              },
              {
                company_name: "CREDENC WEB TECHNOLOGIES PRIVATE LIMITED",
                company_address: "2ND FLOOR, DLF CENTRE, SANSAD MARG, CENTRAL, DELHI, DELHI, 110001"
              },
              {
                company_name: "GLOBAL CONTENT TRANSFORMATION (PVT) LTD.",
                company_address: "2310 DOON EXPRESS BUSINESS PARK, BUILDING 2000 SAHARANPUR ROAD, DEHRADUN, OPP. TRANSPORT NAGAR DEHRADUN, UTTARAKHAND, 248001"
              }
            ]
          },
          datetime: "2023-11-17 04:07:25.614332"
        }
      },
      { 
        id: "uan-history-v2", 
        name: "UAN History - V2", 
        category: "profession-check",
        requestSample: {
          uan: "111XXXXXXXXX",
          consent: "Y",
          consent_text: "I give my consent to employment-history(v2) api to check my employment history"
        }
      },
      { 
        id: "uan-history-v3", 
        name: "UAN History - V3", 
        category: "profession-check",
        requestSample: {
          uan: "1000087654321",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their uan data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "99957975-f95f-4beb-ba96-74c1e763c310",
          api_category: "Employment",
          api_name: "Employment History V3",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            uan: "1000087654321",
            name: "RAM SINGH",
            guardian_name: "SHAM SINGH",
            employment_history: [
              {
                establishment_name: "ABC PRIVATE LIMITED",
                member_id: "MRNOI12345430000012345",
                date_of_joining: "2025-01-01",
                date_of_exit: ""
              },
              {
                establishment_name: "XYZ PRIVATE LIMITED",
                member_id: "UKDDN0123450000001230",
                date_of_joining: "2024-01-01",
                date_of_exit: "2024-12-01"
              }
            ]
          },
          datetime: "2025-03-31 11:32:45.544294"
        }
      },
      { 
        id: "uan-history-latest", 
        name: "UAN History Latest", 
        category: "profession-check",
        requestSample: {
          uan: "100987654321",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using their UAN Number and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        },
        responseSample: {
          txn_id: "14ca6d0b-960a-42d8-8915-74f6a823a0ee",
          api_category: "Employment",
          api_name: "Employment History Latest",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            uan: "100987654321",
            name: "RAM SINGH",
            dob: "01/01/1999",
            member_id: "DLPCM20142350000010000",
            company_name: "ABC PRIVATE LIMITED",
            company_address: "1ST FLOOR, ABC CENTRE, DELHI, DELHI, 110001",
            date_of_exit: "01/01/2023",
            date_of_joining: "01/01/2021"
          },
          datetime: "2024-08-09 10:02:49.043676"
        }
      },
      { 
        id: "uan-history-latest-v2", 
        name: "UAN History Latest V2", 
        category: "profession-check",
        requestSample: {
          uan: "100987654321",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their UAN data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "bb09e7be-cb19-48fa-93ad-4d4c0b174396",
          api_category: "Employment",
          api_name: "Employment History Latest V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            uan: "100987654321",
            name: "RAM SINGH",
            dob: "1999/01/01",
            guardian_name: "SHAM SINGH",
            company_name: "ABC PRIVATE LIMITED",
            member_id: "DLPCM20142350000010000",
            date_of_joining: "2020/01/01",
            last_pf_submitted: "2025/01/01"
          },
          datetime: "2025-03-06 12:53:19.107105"
        }
      },
      { id: "uan-history-latest-fathers-name", name: "UAN History Latest (with father's name)", category: "profession-check" },
      { 
        id: "uan-profile-lookup-advance", 
        name: "UAN profile lookup (Advance)", 
        category: "profession-check",
        requestSample: {
          uan: "111XXXXXXXXX"
        }
      },
      { 
        id: "establishment-name-to-details", 
        name: "Establishment Name to Establishment Details", 
        category: "profession-check",
        requestSample: {
          establishment_name: "ABC PRIVATE LTD",
          consent: "Y",
          consent_text: "We confirm that we have obtained the consent of the respective customer to fetch their details by using Establishment Name and the customer is aware of the purpose for which their data is sought for being processed and have given their consent for the same and such consent is currently valid and not withdrawn."
        }
      },
      { 
        id: "establishment-code-to-details", 
        name: "Establishment Code to Establishment Details", 
        category: "profession-check",
        requestSample: {
          establishment_code: "0123456"
        },
        responseSample: {
          txn_id: "b9a46aa8-b6a5-41e8-97d8-79e1bc084c09",
          api_category: "Know Your Business (KYB)",
          api_name: "Establishment Details",
          billable: true,
          message: "Record Found Successfully",
          status: 1,
          result: {
            validity_status: {
              establishment_code: "CAABE0123456789",
              establishment_name: "ABC TECHNOLOGIES PRIVATE LIMITED",
              establishment_status: "CODE NO ALLOTTED WAS BEFORE ONLINE REGISTRATION STARTED.",
              registration_status: "PERMANENT LOGIN CREATED BY OWNER ON ECR PORTAL",
              post_coverage: "--"
            },
            establishment_details: {
              establishment_name: "ABC TECHNOLOGIES PRIVATE LIMITED",
              establishment_code: "CAABE0123456789",
              pan_status: "VERIFIED",
              "section-applicable": "INDUSTRIES SPECIFIED IN SCH.1 AND 20 OR MORE PERSONS ARE EMPLOYED",
              primary_business_activity: "TEXTILES",
              esic_code: "09700656460000088",
              ownership_type: "Partnership Firm",
              date_of_setup: "23-SEP-1998",
              address: "2ND FLOOR, SAFDARJUNG MARG",
              pincode: "112233",
              city: "DELHI",
              district: "DELHI",
              state: "DELHI",
              country: "India",
              epfo_office_name: "DELHI (NORTH)",
              zone: "DELHI AND UTTARAKHAND",
              region: "DL - DELHI (NORTH)"
            },
            director_details: [
              {
                name: "RAM SHARMA",
                designation: "PARTNER",
                dob: "11-JUN-1978",
                f_name: "SHAM SHARMA",
                residential_address: "FIRST FLOOR, SC-22/53-GF, SANSAD AREA, DELHI -110236",
                date_of_position: "20-SEP-1999"
              }
            ],
            payment_details: [
              {
                month: "JAN-24",
                number_of_employees: "19",
                amount: "115503"
              },
              {
                month: "FEB-24",
                number_of_employees: "19",
                amount: "134446"
              },
              {
                month: "MAR-24",
                number_of_employees: "19",
                amount: "112399"
              }
            ]
          },
          datetime: "2024-04-24 16:12:12.315720"
        }
      },
      { 
        id: "mobile-to-esic-number", 
        name: "Mobile to ESIC Number", 
        category: "profession-check",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "26992143-50f7-47ab-b095-34498e2bc125",
          api_category: "Employment",
          api_name: "Mobile to ESIC",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            mobile: "9876543210",
            esic_numbers: [
              "6987654321",
              "9987654321"
            ]
          },
          datetime: "2025-03-18 15:23:54.955807"
        }
      },
      { 
        id: "mobile-to-esic-details", 
        name: "Mobile to ESIC Details", 
        category: "profession-check",
        requestSample: {
          mobile: "8802812345",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "c2ae9396-e5c1-421d-bd62-7ffd9e951e31",
          api_category: "Employment",
          api_name: "Mobile to ESIC Details",
          billable: true,
          message: "Success",
          status: 1,
          result: [
            {
              esic_number: "0000001234",
              name: "Ram Kumar",
              employer_code: "11009997412345678",
              employer_name: "Leather factory",
              mobile: "8802812345",
              uan_number: "",
              bank_name: "IDBI BANK",
              branch_name: "DHENKANAL",
              bank_account_status: "Not Verified"
            },
            {
              esic_number: "1000000004",
              name: "manas kumar naik",
              employer_code: "13009990012345678",
              employer_name: "Namah Pvt. Ltd.",
              mobile: "8802812345",
              uan_number: "",
              bank_name: "IDBI BANK",
              branch_name: "DHENKANAL",
              bank_account_status: "Not Verified"
            }
          ],
          datetime: "2024-11-28 14:51:24.173762"
        }
      },
      { 
        id: "mobile-to-esic-details-v2", 
        name: "Mobile to ESIC Details V2", 
        category: "profession-check",
        requestSample: {
          mobile: "9876543210",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their mobile data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "3f20b6cc-f598-4d36-9077-6c2d8a9d2b6c",
          api_category: "Employment",
          api_name: "Mobile to ESIC Details V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            mobile_no: "9876543210",
            esic_details: [
              {
                esic_number: "6543214933",
                name: "RAM SINGH",
                employer_code: "28000540987654321",
                employer_name: "ABC ENGINEERING",
                mobile: "9876543210",
                uan_number: "1021987654321",
                bank_name: "HDFC BANK",
                branch_name: "KOLKATA - STEPHEN HOUSE (BBD BAG)",
                bank_account_status: "Not Verified",
                uhid_number: "",
                date_of_birth: "01/01/1999",
                registration_date: "04/11/2024",
                dispensary_name: "Renukoot, Sonbhadra, UP (ESIS Disp.)",
                employer_details: {
                  employer_code: "12345678987654321",
                  employer_name: "ABC Private Limited",
                  address: "Nirayan Sales&Marketing,Mehmoorgaj Varanasi",
                  state: "Uttar Pradesh",
                  district: "Varanasi",
                  pincode: "221001",
                  email: "abc@email.com"
                },
                address: "SHIV MANDIR RENUSAGAR Sonbhadra Uttar Pradesh 231218",
                age: "26",
                gender: "Male"
              }
            ]
          },
          datetime: "2025-03-18 16:01:41.244487"
        }
      },
      { 
        id: "esic-number-to-details", 
        name: "ESIC Number to ESIC Details", 
        category: "profession-check",
        requestSample: {
          esic_number: "987654321",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their esic data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "38e40499-f811-4a85-87b5-e03d092897f2",
          api_category: "Employment",
          api_name: "ESIC Number to ESIC Details",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            esic_number: "987654321",
            esic_details: [
              {
                esic_number: "987654321",
                name: "RAM SINGH",
                employer_code: "12345678987654321",
                employer_name: "ABC Private Limited",
                mobile: "987654321",
                uan_number: "",
                bank_name: "ABC BANK OF INDIA",
                branch_name: "Delhi",
                bank_account_status: "Not Verified"
              }
            ]
          },
          datetime: "2025-03-19 12:35:13.634254"
        }
      },
      { 
        id: "esic-number-to-details-v2", 
        name: "ESIC Number to ESIC Details V2", 
        category: "profession-check",
        requestSample: {
          esic_number: "987654321",
          consent: "Y",
          consent_text: "We confirm obtaining valid customer consent to access/process their esic data. Consent remains valid, informed, and unwithdrawn."
        },
        responseSample: {
          txn_id: "27f0198c-0cf5-427a-afc3-331ea1ce42f9",
          api_category: "Employment",
          api_name: "ESIC Number to ESIC Details V2",
          billable: true,
          message: "Success",
          status: 1,
          result: {
            esic_number: "987654321",
            esic_details: [
              {
                esic_number: "987654321",
                name: "RAM SINGH",
                employer_code: "12345678987654321",
                employer_name: "ABC Private Limited",
                mobile: "987654321",
                uan_number: "",
                bank_name: "ABC BANK OF INDIA",
                branch_name: "Delhi",
                bank_account_status: "Not Verified",
                uhid_number: "",
                date_of_birth: "01/01/1999",
                registration_date: "28/10/2024",
                dispensary_name: "Lahuravir, Varanasi, UP (ESIS Disp.)",
                employer_details: {
                  employer_code: "12345678987654321",
                  employer_name: "ABC Private Limited",
                  address: "Nirayan Sales&Marketing,Mehmoorgaj Varanasi",
                  state: "Uttar Pradesh",
                  district: "Varanasi",
                  pincode: "221001",
                  email: "abc@email.com"
                },
                address: "House No 123, Chandauli, Mughalsarai, Uttar Pradesh Varanasi Uttar Pradesh",
                age: "24",
                gender: "Male"
              }
            ]
          },
          datetime: "2025-03-19 14:42:19.209970"
        }
      },
    ],
  },
];
