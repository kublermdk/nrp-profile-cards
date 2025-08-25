export interface ProfileData {
    personalInfo: {
        name: string;
        age: number;
        profilePicture: string;
        countryOfOrigin: string;
        currentResidence: string;
        jobTitles: string[];
        generatedAt: string;
    };
    stage: {
        primary: string;
        confidence: number;
    };
    mbti: {
        type: string;
        confidence: number;
    };
    enneagram: {
        type: string;
        wing: string;
        confidence: number;
    };
    oceanTraits: {
        openness: { value: number; confidence: number };
        conscientiousness: { value: number; confidence: number };
        extraversion: { value: number; confidence: number };
        agreeableness: { value: number; confidence: number };
        neuroticism: { value: number; confidence: number };
    };
    multipleIntelligences: {
        linguistic: { value: number; confidence: number };
        logicalMathematical: { value: number; confidence: number };
        spatial: { value: number; confidence: number };
        musical: { value: number; confidence: number };
        bodilyKinesthetic: { value: number; confidence: number };
        interpersonal: { value: number; confidence: number };
        intrapersonal: { value: number; confidence: number };
        naturalist: { value: number; confidence: number };
        existential?: { value: number; confidence: number };
    };
    darkTriad: {
        narcissism: { value: number; confidence: number };
        machiavellianism: { value: number; confidence: number };
        psychopathy: { value: number; confidence: number };
    };
    lightTriad: {
        humanism: { value: number; confidence: number };
        kantianism: { value: number; confidence: number };
        faithInHumanity: { value: number; confidence: number };
    };
    developmentLines: {
        cognitive: { value: number; confidence: number };
        moral: { value: number; confidence: number };
        psychosocial: { value: number; confidence: number };
        leadership?: { value: number; confidence: number };
        worldview?: { value: number; confidence: number };
        aesthetic?: { value: number; confidence: number };
    };
    specialStatus: {
        type: string | null;
        level: number | null;
    };
}

export const profilesData: Record<string, ProfileData> = {
    "David Long": {
        "personalInfo": {
            "name": "David Long",
            "age": 42,
            "profilePicture": "profile-pictures/david_long_profile.webp",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "NRP Founder",
                "Consultant",
                "Video Production",
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z"
        },
        "stage": {
            "primary": "Turquoise",
            "confidence": 99
        },
        "mbti": {
            "type": "ENTJ",
            "confidence": 70
        },
        "enneagram": {
            "type": "8",
            "wing": "w9",
            "confidence": 70
        },
        "oceanTraits": {
            "openness": {
                "value": 75,
                "confidence": 70
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 80
            },
            "extraversion": {
                "value": 40,
                "confidence": 75
            },
            "agreeableness": {
                "value": 70,
                "confidence": 70
            },
            "neuroticism": {
                "value": 45,
                "confidence": 70
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 80,
                "confidence": 75
            },
            "logicalMathematical": {
                "value": 85,
                "confidence": 80
            },
            "spatial": {
                "value": 70,
                "confidence": 70
            },
            "musical": {
                "value": 85,
                "confidence": 80
            },
            "bodilyKinesthetic": {
                "value": 55,
                "confidence": 65
            },
            "interpersonal": {
                "value": 75,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 80,
                "confidence": 75
            },
            "naturalist": {
                "value": 60,
                "confidence": 65
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 10,
                "confidence": 70
            },
            "machiavellianism": {
                "value": 5,
                "confidence": 70
            },
            "psychopathy": {
                "value": 0,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 95,
                "confidence": 75
            },
            "kantianism": {
                "value": 95,
                "confidence": 75
            },
            "faithInHumanity": {
                "value": 95,
                "confidence": 70
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 80,
                "confidence": 75
            },
            "moral": {
                "value": 80,
                "confidence": 75
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Leonardo da Vinci": {
        "personalInfo": {
            "name": "Leonardo da Vinci",
            "age": 67,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/500px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
            // "profilePicture": "leonardo_profile.jpg",
            "countryOfOrigin": "Italy",
            "currentResidence": "France",
            "jobTitles": [
                "Renaissance Polymath",
                "Artist",
                "Inventor",
                "Scientist",
                "Engineer"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z"
        },
        "stage": {
            "primary": "Orange",
            "confidence": 50
        },
        "mbti": {
            "type": "ENTP",
            "confidence": 75
        },
        "enneagram": {
            "type": "5",
            "wing": "w4",
            "confidence": 80
        },
        "oceanTraits": {
            "openness": {
                "value": 99,
                "confidence": 95
            },
            "conscientiousness": {
                "value": 60,
                "confidence": 70
            },
            "extraversion": {
                "value": 65,
                "confidence": 70
            },
            "agreeableness": {
                "value": 70,
                "confidence": 75
            },
            "neuroticism": {
                "value": 45,
                "confidence": 70
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 80
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 90
            },
            "spatial": {
                "value": 99,
                "confidence": 95
            },
            "musical": {
                "value": 80,
                "confidence": 75
            },
            "bodilyKinesthetic": {
                "value": 90,
                "confidence": 85
            },
            "interpersonal": {
                "value": 75,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 90,
                "confidence": 85
            },
            "naturalist": {
                "value": 95,
                "confidence": 90
            },
            "existential": {
                "value": 95,
                "confidence": 85
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 35,
                "confidence": 70
            },
            "machiavellianism": {
                "value": 25,
                "confidence": 75
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 80
            },
            "kantianism": {
                "value": 75,
                "confidence": 75
            },
            "faithInHumanity": {
                "value": 80,
                "confidence": 75
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 99,
                "confidence": 95
            },
            "moral": {
                "value": 75,
                "confidence": 75
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "worldview": {
                "value": 90,
                "confidence": 85
            },
            "aesthetic": {
                "value": 99,
                "confidence": 95
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Peter Joseph": {
        "personalInfo": {
            "name": "Peter Joseph",
            "age": 45,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Peter_Joseph.jpg/500px-Peter_Joseph.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "Filmmaker",
                "Social Activist",
                "Zeitgeist Movement Founder",
                "Author"
            ],
            "generatedAt": "2025-08-24T19:41:00.000Z"
        },
        "stage": {
            "primary": "Green/Yellow",
            "confidence": 80
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 75
        },
        "enneagram": {
            "type": "1",
            "wing": "w9",
            "confidence": 70
        },
        "oceanTraits": {
            "openness": {
                "value": 90,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 80
            },
            "extraversion": {
                "value": 40,
                "confidence": 75
            },
            "agreeableness": {
                "value": 70,
                "confidence": 70
            },
            "neuroticism": {
                "value": 60,
                "confidence": 70
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 90,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 80,
                "confidence": 80
            },
            "spatial": {
                "value": 75,
                "confidence": 70
            },
            "musical": {
                "value": 70,
                "confidence": 65
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 65
            },
            "interpersonal": {
                "value": 75,
                "confidence": 75
            },
            "intrapersonal": {
                "value": 90,
                "confidence": 85
            },
            "naturalist": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 35,
                "confidence": 75
            },
            "machiavellianism": {
                "value": 40,
                "confidence": 70
            },
            "psychopathy": {
                "value": 10,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 90,
                "confidence": 85
            },
            "kantianism": {
                "value": 85,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 80,
                "confidence": 75
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 80
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 75,
                "confidence": 75
            },
            "worldview": {
                "value": 90,
                "confidence": 85
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Barack Obama": {
        "personalInfo": {
            "name": "Barack Obama",
            "age": 62,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Barack_H._Obama_close-up_%28cropped%29.png/960px-Barack_H._Obama_close-up_%28cropped%29.png",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "44th President of the United States",
                "Author",
                "Public Speaker"
            ],
            "generatedAt": "2025-08-24T19:41:00.000Z"
        },
        "stage": {
            "primary": "Green/Yellow",
            "confidence": 85
        },
        "mbti": {
            "type": "ENFJ",
            "confidence": 80
        },
        "enneagram": {
            "type": "9",
            "wing": "w1",
            "confidence": 75
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 80
            },
            "conscientiousness": {
                "value": 65,
                "confidence": 85
            },
            "extraversion": {
                "value": 80,
                "confidence": 90
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 35,
                "confidence": 80
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 90
            },
            "logicalMathematical": {
                "value": 75,
                "confidence": 70
            },
            "spatial": {
                "value": 60,
                "confidence": 65
            },
            "musical": {
                "value": 70,
                "confidence": 60
            },
            "bodilyKinesthetic": {
                "value": 65,
                "confidence": 70
            },
            "interpersonal": {
                "value": 95,
                "confidence": 95
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 80
            },
            "naturalist": {
                "value": 70,
                "confidence": 60
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 25,
                "confidence": 70
            },
            "machiavellianism": {
                "value": 30,
                "confidence": 75
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 95,
                "confidence": 90
            },
            "kantianism": {
                "value": 85,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 90,
                "confidence": 85
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 80
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 95,
                "confidence": 90
            },
            "leadership": {
                "value": 95,
                "confidence": 95
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Hank Green": {
        "personalInfo": {
            "name": "Hank Green",
            "age": 44,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hank_Green_in_His_2023_Office_Tour.jpg/500px-Hank_Green_in_His_2023_Office_Tour.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "YouTuber",
                "Science Communicator",
                "Author",
                "Entrepreneur"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z"
        },
        "stage": {
            "primary": "Green",
            "confidence": 80
        },
        "mbti": {
            "type": "ENFP",
            "confidence": 75
        },
        "enneagram": {
            "type": "7",
            "wing": "w6",
            "confidence": 75
        },
        "oceanTraits": {
            "openness": {
                "value": 90,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 70,
                "confidence": 80
            },
            "extraversion": {
                "value": 85,
                "confidence": 90
            },
            "agreeableness": {
                "value": 80,
                "confidence": 85
            },
            "neuroticism": {
                "value": 55,
                "confidence": 75
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 90
            },
            "logicalMathematical": {
                "value": 85,
                "confidence": 85
            },
            "spatial": {
                "value": 70,
                "confidence": 70
            },
            "musical": {
                "value": 75,
                "confidence": 70
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 65
            },
            "interpersonal": {
                "value": 90,
                "confidence": 85
            },
            "intrapersonal": {
                "value": 75,
                "confidence": 80
            },
            "naturalist": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 20,
                "confidence": 80
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 85
            },
            "psychopathy": {
                "value": 5,
                "confidence": 90
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 90,
                "confidence": 85
            },
            "kantianism": {
                "value": 80,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 80
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 85
            },
            "moral": {
                "value": 85,
                "confidence": 80
            },
            "psychosocial": {
                "value": 80,
                "confidence": 80
            },
            "worldview": {
                "value": 85,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Elon Musk": {
        "personalInfo": {
            "name": "Elon Musk",
            "age": 53,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Elon_Musk%2C_2018_%28cropped%29.jpg/500px-Elon_Musk%2C_2018_%28cropped%29.jpg",
            "countryOfOrigin": "South Africa",
            "currentResidence": "United States",
            "jobTitles": [
                "CEO Tesla",
                "CEO SpaceX",
                "Owner X",
                "Entrepreneur"
            ],
            "generatedAt": "2025-08-24T19:41:00.000Z"
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 75
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 80
        },
        "enneagram": {
            "type": "5",
            "wing": "w4",
            "confidence": 75
        },
        "oceanTraits": {
            "openness": {
                "value": 95,
                "confidence": 90
            },
            "conscientiousness": {
                "value": 90,
                "confidence": 85
            },
            "extraversion": {
                "value": 35,
                "confidence": 80
            },
            "agreeableness": {
                "value": 25,
                "confidence": 85
            },
            "neuroticism": {
                "value": 70,
                "confidence": 75
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 80,
                "confidence": 75
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 90,
                "confidence": 85
            },
            "musical": {
                "value": 60,
                "confidence": 60
            },
            "bodilyKinesthetic": {
                "value": 70,
                "confidence": 70
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 80
            },
            "naturalist": {
                "value": 75,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 65,
                "confidence": 75
            },
            "machiavellianism": {
                "value": 50,
                "confidence": 70
            },
            "psychopathy": {
                "value": 20,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 70,
                "confidence": 75
            },
            "kantianism": {
                "value": 60,
                "confidence": 70
            },
            "faithInHumanity": {
                "value": 75,
                "confidence": 70
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 90
            },
            "moral": {
                "value": 60,
                "confidence": 70
            },
            "psychosocial": {
                "value": 50,
                "confidence": 75
            },
            "leadership": {
                "value": 85,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Jeff Bezos": {
        "personalInfo": {
            "name": "Jeff Bezos",
            "age": 60,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Jeff_Bezos%27_iconic_laugh_crop.jpg/500px-Jeff_Bezos%27_iconic_laugh_crop.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "Executive Chairman Amazon",
                "Blue Origin Founder",
                "Investor",
                "Philanthropist"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z"
        },
        "stage": {
            "primary": "Orange",
            "confidence": 85
        },
        "mbti": {
            "type": "ESTJ",
            "confidence": 80
        },
        "enneagram": {
            "type": "8",
            "wing": "w7",
            "confidence": 80
        },
        "oceanTraits": {
            "openness": {
                "value": 75,
                "confidence": 80
            },
            "conscientiousness": {
                "value": 95,
                "confidence": 90
            },
            "extraversion": {
                "value": 75,
                "confidence": 85
            },
            "agreeableness": {
                "value": 30,
                "confidence": 80
            },
            "neuroticism": {
                "value": 25,
                "confidence": 75
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 80
            },
            "logicalMathematical": {
                "value": 90,
                "confidence": 85
            },
            "spatial": {
                "value": 75,
                "confidence": 75
            },
            "musical": {
                "value": 40,
                "confidence": 60
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 65
            },
            "interpersonal": {
                "value": 75,
                "confidence": 80
            },
            "intrapersonal": {
                "value": 80,
                "confidence": 75
            },
            "naturalist": {
                "value": 65,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 70,
                "confidence": 80
            },
            "machiavellianism": {
                "value": 65,
                "confidence": 75
            },
            "psychopathy": {
                "value": 25,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 40,
                "confidence": 75
            },
            "kantianism": {
                "value": 50,
                "confidence": 70
            },
            "faithInHumanity": {
                "value": 55,
                "confidence": 70
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 80
            },
            "moral": {
                "value": 50,
                "confidence": 75
            },
            "psychosocial": {
                "value": 60,
                "confidence": 75
            },
            "leadership": {
                "value": 90,
                "confidence": 90
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Donald Trump": {
        "personalInfo": {
            "name": "Donald J. Trump",
            "age": 78,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Donald_Trump_closeup.jpg/960px-Donald_Trump_closeup.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "45th President of the United States",
                "Business Executive",
                "Real Estate Developer"
            ],
            "generatedAt": "2025-08-24T19:41:00.000Z"
        },
        "stage": {
            "primary": "Red",
            "confidence": 80
        },
        "mbti": {
            "type": "ESTP",
            "confidence": 75
        },
        "enneagram": {
            "type": "8",
            "wing": "w7",
            "confidence": 80
        },
        "oceanTraits": {
            "openness": {
                "value": 45,
                "confidence": 75
            },
            "conscientiousness": {
                "value": 40,
                "confidence": 80
            },
            "extraversion": {
                "value": 95,
                "confidence": 95
            },
            "agreeableness": {
                "value": 20,
                "confidence": 85
            },
            "neuroticism": {
                "value": 75,
                "confidence": 80
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 75,
                "confidence": 80
            },
            "logicalMathematical": {
                "value": 55,
                "confidence": 70
            },
            "spatial": {
                "value": 70,
                "confidence": 65
            },
            "musical": {
                "value": 40,
                "confidence": 60
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 65
            },
            "interpersonal": {
                "value": 70,
                "confidence": 75
            },
            "intrapersonal": {
                "value": 35,
                "confidence": 70
            },
            "naturalist": {
                "value": 30,
                "confidence": 60
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 85,
                "confidence": 90
            },
            "machiavellianism": {
                "value": 75,
                "confidence": 80
            },
            "psychopathy": {
                "value": 40,
                "confidence": 75
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 25,
                "confidence": 75
            },
            "kantianism": {
                "value": 20,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 30,
                "confidence": 75
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 50,
                "confidence": 70
            },
            "moral": {
                "value": 25,
                "confidence": 80
            },
            "psychosocial": {
                "value": 45,
                "confidence": 75
            },
            "leadership": {
                "value": 70,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
};