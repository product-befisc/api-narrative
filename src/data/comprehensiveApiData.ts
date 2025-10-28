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
          pan: "XXXXXXXXX",
          it: 1 // optional
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
          pan: "XXXXXXXXX"
        },
        responseSample: {
          api_category: "KYC",
          api_name: "PAN Verification (Basic)",
          billable: true,
          txn_id: "6254d5b4-1530-4247-a734-743244d6de9f",
          message: "Success",
          status: 1,
          result: {
            pan_number: "XXXXXXX",
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
          pan: "XXXXXXXXX"
        },
        responseSample: {
          api_category: "Know Your Customer (KYC)",
          api_name: "PAN Verification",
          billable: true,
          txn_id: "53ba2ee6-bfb6-4897-a4ad-24f34211fab2",
          message: "Success",
          status: 1,
          result: {
            pan_number: "DKYPK5XXXX",
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
          pan: "XXXXXXXXX"
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
      { id: "gst-verification-mobile-otp", name: "GST Verification with Mobile OTP", category: "kyb" },
      { id: "gst-basic", name: "GST (Basic)", category: "kyb" },
      { id: "gst-advance", name: "GST (Advance)", category: "kyb" },
      { id: "gst-advance-v2", name: "GST (Advance) V2", category: "kyb" },
      { id: "turnover", name: "Turnover", category: "kyb" },
      { id: "gst-to-business-contact-v1", name: "GST to Business Contact V1", category: "kyb" },
      { id: "gst-to-business-contact-v2", name: "GST to Business Contact V2", category: "kyb" },
      { id: "company-name-to-gst", name: "Company Name to GST Lookup", category: "kyb" },
      { id: "mobile-to-gst-check", name: "Mobile to GST Check", category: "kyb" },
      { id: "mobile-to-gst", name: "Mobile to GST", category: "kyb" },
      { id: "email-to-gst-lookup", name: "Email to GST Lookup", category: "kyb" },
      { id: "gst-to-pan", name: "GST to PAN", category: "kyb" },
      { id: "pan-to-gst-number-lookup", name: "PAN to GST Number Lookup", category: "kyb" },
      { id: "gst-to-cin", name: "GST to CIN", category: "kyb" },
      { id: "gst-to-cin-details", name: "GST to CIN Details", category: "kyb" },
      { id: "gst-to-mcc", name: "GST To MCC", category: "kyb" },
      { id: "hsn-to-mcc", name: "HSN To MCC", category: "kyb" },
      { id: "pan-to-din", name: "PAN to DIN", category: "kyb" },
      { id: "pan-to-din-details", name: "PAN to DIN Details", category: "kyb" },
      { id: "pan-to-cin", name: "PAN to CIN", category: "kyb" },
      { id: "din-mobile-lookup", name: "DIN Mobile Lookup", category: "kyb" },
      { id: "din-contact-lookup", name: "Din Contact Lookup", category: "kyb" },
      { id: "din-to-pan", name: "DIN to PAN", category: "kyb" },
      { id: "cin-to-pan", name: "CIN to PAN", category: "kyb" },
      { id: "cin-to-gst", name: "CIN to GST", category: "kyb" },
      { id: "cin-to-gst-details", name: "CIN to GST Details", category: "kyb" },
      { id: "cin-number-lookup", name: "CIN Number Lookup", category: "kyb" },
      { id: "entity-name-to-cin-lookup", name: "Entity Name to CIN lookup", category: "kyb" },
      { id: "udyam-registration", name: "Udyam Registration", category: "kyb" },
      { id: "udyam-certificate-advance", name: "Udyam Certificate Advance", category: "kyb" },
      { id: "verify-udyam", name: "Verify Udyam", category: "kyb" },
      { id: "udyam-detail-v2", name: "Udyam Detail V2", category: "kyb" },
      { id: "mobile-to-udyam", name: "Mobile to Udyam", category: "kyb" },
      { id: "mobile-to-udyam-details", name: "Mobile to Udyam Details", category: "kyb" },
      { id: "pan-to-udyam", name: "PAN to Udyam", category: "kyb" },
      { id: "pan-to-udyam-details", name: "PAN to Udyam Details", category: "kyb" },
      { id: "mobile-udyam-to-pan", name: "Mobile & Udyam to PAN", category: "kyb" },
      { id: "udyam-certificate-download", name: "Udyam Certificate Download", category: "kyb" },
      { id: "udyam-assist-details", name: "Udyam Assist Details", category: "kyb" },
      { id: "business-pan", name: "Business PAN", category: "kyb" },
      { id: "tan-details", name: "TAN Details", category: "kyb" },
      { id: "fssai-verification", name: "FSSAI Verification", category: "kyb" },
      { id: "pan-to-iec", name: "PAN to IEC", category: "kyb" },
      { id: "mobile-to-iec", name: "Mobile to IEC", category: "kyb" },
      { id: "pan-to-tan", name: "PAN to TAN", category: "kyb" },
      { id: "pan-to-tan-v2", name: "PAN to TAN V2", category: "kyb" },
      { id: "tan-to-pan", name: "TAN to PAN", category: "kyb" },
      { id: "name-to-tan", name: "Name to TAN", category: "kyb" },
      { id: "tds-certificate-verification", name: "TDS Certificate Verification", category: "kyb" },
      { id: "iec-to-ie-details", name: "IEC to IE Details", category: "kyb" },
      { id: "iec-to-ie-details-advance", name: "IEC to IE Details Advance", category: "kyb" },
    ],
  },
  {
    id: "mobile-360",
    name: "Mobile 360",
    apis: [
      { id: "mobile-number-lookup", name: "Mobile Number Lookup", category: "mobile-360" },
      { id: "mobile-lookup-basic-new", name: "Mobile Lookup (Basic) New", category: "mobile-360" },
      { id: "mobile-lookup-supreme-new", name: "Mobile Lookup (Supreme) New", category: "mobile-360" },
      { id: "profile-basic", name: "Profile Basic", category: "mobile-360" },
      { id: "profile-advance", name: "Profile Advance", category: "mobile-360" },
      { id: "mobile-to-dl-number", name: "Mobile to DL Number", category: "mobile-360" },
      { id: "mobile-to-director-pan", name: "Mobile to Director PAN", category: "mobile-360" },
      { id: "telco-basic", name: "Telco (Basic)", category: "mobile-360" },
      { id: "telco-advance", name: "Telco (Advance)", category: "mobile-360" },
      { id: "telco-advance-otp", name: "Telco Advance (OTP Based)", category: "mobile-360" },
      { id: "digital-footprint", name: "Digital Footprint", category: "mobile-360" },
      { id: "email-verification", name: "Email Verification", category: "mobile-360" },
      { id: "validate-whatsapp", name: "Validate WhatsApp", category: "mobile-360" },
      { id: "geo-location", name: "Geo Location", category: "mobile-360" },
      { id: "geo-distance-pincode", name: "Geo Distance (Pincode)", category: "mobile-360" },
      { id: "geo-distance", name: "Geo Distance", category: "mobile-360" },
    ],
  },
  {
    id: "utility",
    name: "Utility",
    apis: [
      { id: "lpg-verification", name: "LPG Verification", category: "utility" },
      { id: "lpg-verification-mobile", name: "LPG Verification (Mobile)", category: "utility" },
      { id: "indanegas-verification", name: "IndaneGas Verification", category: "utility" },
      { id: "hpgas-verification", name: "HPGas Verification", category: "utility" },
      { id: "bharatgas-verification", name: "BharatGas Verification", category: "utility" },
      { id: "details-check", name: "Details Check", category: "utility" },
      { id: "fraud-check", name: "Fraud Check", category: "utility" },
      { id: "pan-to-masked-aadhaar", name: "PAN to Masked Aadhaar", category: "utility" },
      { id: "aadhaar-to-pan", name: "Aadhaar to PAN", category: "utility" },
      { id: "aadhaar-validation-lite", name: "Aadhaar Validation Lite", category: "utility" },
      { id: "mobile-age", name: "MobileAge", category: "utility" },
      { id: "mobile-revoke", name: "Mobile Revoke", category: "utility" },
      { id: "mobile-revoke-v2", name: "Mobile Revoke V2", category: "utility" },
      { id: "mobile-360-util", name: "Mobile 360", category: "utility" },
      { id: "e-stamp-certificate", name: "E-stamp Certificate Verification", category: "utility" },
      { id: "tampering-check", name: "Tampering Check", category: "utility" },
      { id: "address-tracing", name: "Address Tracing", category: "utility" },
      { id: "buying-capacity", name: "Buying Capacity", category: "utility" },
      { id: "bank-statement-analysis-v2", name: "Bank Statement Analysis V2", category: "utility" },
    ],
  },
  {
    id: "financial-check",
    name: "Financial Check",
    apis: [
      { id: "bank-account-penny-drop", name: "Bank Account Verification (Penny Drop)", category: "financial-check" },
      { id: "bank-account-penny-less", name: "Bank Account Verification (Penny Less)", category: "financial-check" },
      { id: "experian", name: "Experian", category: "financial-check" },
      { id: "digital-payment-id-analyser", name: "Digital Payment ID Analyser", category: "financial-check" },
      { id: "mobile-to-account-number", name: "Mobile to Account Number", category: "financial-check" },
      { id: "digital-payment-to-account", name: "Digital Payment ID to Account Number", category: "financial-check" },
      { id: "pan-to-account-linkage", name: "PAN to Account Linkage Check", category: "financial-check" },
      { id: "digital-payment-id-verification", name: "Digital Payment ID Verification (Basic)", category: "financial-check" },
      { id: "ifsc-to-branch-details", name: "IFSC to Branch Details", category: "financial-check" },
    ],
  },
  {
    id: "vehicle-verification",
    name: "Vehicle Verification Live",
    apis: [
      { id: "rc-advance", name: "RC (Advance)", category: "vehicle-verification" },
      { id: "rc-advance-v2", name: "RC (Advance - V2)", category: "vehicle-verification" },
      { id: "rc-advance-v3", name: "RC (Advance - V3)", category: "vehicle-verification" },
      { id: "fastag-details", name: "Fastag Details", category: "vehicle-verification" },
      { id: "challan-details", name: "Challan Details", category: "vehicle-verification" },
      { id: "transaction-id-to-vehicle-tax", name: "Transaction ID to New Vehicle Tax Details", category: "vehicle-verification" },
      { id: "chassis-to-rc-number", name: "Chassis To RC Number", category: "vehicle-verification" },
      { id: "chassis-to-rc-number-v2", name: "Chassis To RC Number V2", category: "vehicle-verification" },
      { id: "chassis-to-rc", name: "Chassis to RC", category: "vehicle-verification" },
      { id: "chassis-to-rc-v2", name: "Chassis to RC V2", category: "vehicle-verification" },
      { id: "new-vehicle-tax-details", name: "New Vehicle Tax Details", category: "vehicle-verification" },
    ],
  },
  {
    id: "profession-check",
    name: "Profession Check",
    apis: [
      { id: "uan-passbook", name: "UAN Passbook", category: "profession-check" },
      { id: "uan-validation", name: "UAN Validation", category: "profession-check" },
      { id: "mobile-to-uan-lookup", name: "Mobile to UAN Lookup", category: "profession-check" },
      { id: "pan-to-uan-lookup", name: "PAN to UAN Lookup", category: "profession-check" },
      { id: "aadhaar-to-uan-lookup", name: "Aadhaar to UAN Lookup", category: "profession-check" },
      { id: "uan-history", name: "UAN History", category: "profession-check" },
      { id: "uan-history-v2", name: "UAN History - V2", category: "profession-check" },
      { id: "uan-history-v3", name: "UAN History - V3", category: "profession-check" },
      { id: "uan-history-latest", name: "UAN History Latest", category: "profession-check" },
      { id: "uan-history-latest-v2", name: "UAN History Latest V2", category: "profession-check" },
      { id: "uan-history-latest-fathers-name", name: "UAN History Latest (with father's name)", category: "profession-check" },
      { id: "uan-profile-lookup-advance", name: "UAN profile lookup (Advance)", category: "profession-check" },
      { id: "establishment-name-to-details", name: "Establishment Name to Establishment Details", category: "profession-check" },
      { id: "establishment-code-to-details", name: "Establishment Code to Establishment Details", category: "profession-check" },
      { id: "mobile-to-esic-number", name: "Mobile to ESIC Number", category: "profession-check" },
      { id: "mobile-to-esic-details", name: "Mobile to ESIC Details", category: "profession-check" },
      { id: "mobile-to-esic-details-v2", name: "Mobile to ESIC Details V2", category: "profession-check" },
      { id: "esic-number-to-details", name: "ESIC Number to ESIC Details", category: "profession-check" },
      { id: "esic-number-to-details-v2", name: "ESIC Number to ESIC Details V2", category: "profession-check" },
    ],
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    apis: [
      { id: "captcha-reader", name: "Captcha Reader", category: "miscellaneous" },
      { id: "tampering-check-misc", name: "Tampering Check", category: "miscellaneous" },
      { id: "pdf-tampering-basic", name: "PDF Tampering Check Basic", category: "miscellaneous" },
      { id: "pdf-tampering-advance", name: "PDF Tampering Check Advance", category: "miscellaneous" },
    ],
  },
];
