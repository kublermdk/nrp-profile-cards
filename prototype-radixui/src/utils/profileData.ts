export interface ProfileData {
    personalInfo: {
        name: string;
        age?: number;
        dateOfBirth?: string; // -- YYYY-MM-DD format, can be partial (YYYY or YYYY-MM)
        deceased?: boolean;
        profilePicture?: string;
        countryOfOrigin?: string;
        currentResidence?: string;
        jobTitles?: string[];
        generatedAt?: string;
        websites?: Array<{
            url: string;
            label?: string;
        }>;
        biography?: string;
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
            "dateOfBirth": "1982-03-15",
            "deceased": false,
            "profilePicture": "profile-pictures/david_long_profile.webp",
            "countryOfOrigin": "United States",
            "currentResidence": "UAE",
            "jobTitles": [
                "NRP Founder",
                "Consultant",
                "Video Production"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-david-long-the-_4VBQwKmRrKkAkg8F.O1RQ",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.nonreductionism.org/",
                    "label": "NRP Website"
                },
                {
                    "url": "https://www.youtube.com/@nonreductionism",
                    "label": "YouTube"
                }
            ],
            "biography": "**David Long** is the founder of the [**Non-Reductionist Philosophy**](https://www.nonreductionism.org/) (NRP) movement, dedicated to exploring holistic approaches to understanding human consciousness and development.\n\nAs a consultant and video production specialist, he combines technical expertise with philosophical insight to create meaningful content that bridges the gap between traditional psychology and emerging paradigms of human potential and is the reason we have these profiles."
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
                "value": 90,
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
    "Michael Kubler": {
        "personalInfo": {
            "name": "Michael Kubler",
            // "age": null,
            // "profilePicture": null,
            "countryOfOrigin": "Australia",
            "currentResidence": "Phillipines",
            "dateOfBirth": "1984-10-27",
            "deceased": false,
            "jobTitles": [
                "Web Developer",
                "Entrepreneur",
                "Sustainability Activist",
                "Systems Thinker",
                "TZM Chapter Founder"
            ],
            "generatedAt": "2025-09-29T18:40:51.476294Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-michael-kubler-uqtijDSsRyiebLS_uzhK3g",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.kublermdk.com",
                    "label": "Personal Website"
                },
                {
                    "url": "https://www.abundantmars.com",
                    "label": "Abundant Mars"
                },
                {
                    "url": "https://www.youtube.com/@kublermdk",
                    "label": "YouTube"
                }
            ],
            "biography": "**Michael Kubler** is a systems-thinking idealist with strong technical capabilities and entrepreneurial drive, operating primarily from Green values with emerging Yellow systems perspective. He demonstrates a commitment to reducing inequality, environmental sustainability, and collective well-being through his \"Price of Zero\" transition concept that aims to provide life necessities free to everyone.\n\nKubler has founded and managed multiple successful technical projects and companies, including founding a chapter of The Zeitgeist Movement (TZM). His diverse interests span web development, photography, filmmaking, AI consciousness exploration, sustainability activism, and space colonization concepts, particularly his Abundant Mars ACeS framework.\n\nHis approach emphasizes cooperation over competition, describing capitalism's problems while proposing collaborative solutions. He travels internationally presenting at conferences and demonstrates resilience in face of business challenges while maintaining an optimistic outlook about systemic transformation and humanity's potential for positive change."
        },
        "stage": {
            "primary": "Turquoise",
            "confidence": 85
        },
        "mbti": {
            "type": "ENFJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "1",
            "wing": "w2",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 95,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 85,
                "confidence": 85
            },
            "spatial": {
                "value": 70,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 85,
                "confidence": 85
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 50
            },
            "naturalist": {
                "value": 85,
                "confidence": 85
            },
            "existential": {
                "value": 80,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 15,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 85
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 95,
                "confidence": 85
            },
            "kantianism": {
                "value": 85,
                "confidence": 85
            },
            "faithInHumanity": {
                "value": 95,
                "confidence": 85
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 90,
                "confidence": 85
            },
            "moral": {
                "value": 90,
                "confidence": 80
            },
            "psychosocial": {
                "value": 85,
                "confidence": 75
            },
            "leadership": {
                "value": 80,
                "confidence": 75
            },
            "worldview": {
                "value": 90,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Bill Gates": {
        "personalInfo": {
            "name": "Bill Gates",
            "age": 69,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg/330px-Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "Medina, Washington",
            "dateOfBirth": "1955-10-28",
            "deceased": false,
            "jobTitles": [
                "Microsoft Co-founder",
                "Philanthropist",
                "Business Magnate",
                "Gates Foundation Co-chair",
                "Author",
                "Investor"
            ],
            "generatedAt": "2025-09-29T18:46:14.546084Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-melinda-gates-PDUrn5Y5TC6ZwkB4Z9cBRA",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.gatesnotes.com/",
                    "label": "Gates Notes"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Bill_Gates",
                    "label": "Wikipedia"
                }
            ],
            "biography": "**Bill Gates** exhibits a Yellow value orientation, emphasizing systems-level innovation, global philanthropy, and long-term strategic planning that has made him one of the most influential figures in both technology and humanitarian sectors. His transition from Microsoft founder to full-time philanthropist demonstrates remarkable cognitive flexibility and commitment to solving humanity's greatest challenges.\n\nGates pioneered software architecture and algorithmic problem-solving at Microsoft, demonstrating exceptional logical-mathematical intelligence that revolutionized personal computing. His belief in innovation through research funding and basic scientific discovery reflects his systematic approach: \"I believe in innovation and that the way you get innovation is you fund research and you learn the basic facts.\"\n\nHis philanthropic philosophy centers on applying discoveries to reduce global inequity, with plans to give away virtually all his wealth by 2045 and close the Gates Foundation operations by then. This disciplined, long-term approach reflects his high conscientiousness and faith in humanity's capacity for progress. His calm resilience in navigating public debates on tech ethics and philanthropy, combined with his collaborative approach to global health equity, demonstrates the integrative thinking and moral commitment that characterizes Yellow-level consciousness."
        },
        "stage": {
            "primary": "Yellow",
            "confidence": 85
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "5",
            "wing": "w6",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 85,
                "confidence": 80
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 80
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 70,
                "confidence": 60
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 75,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 70,
                "confidence": 60
            },
            "existential": {
                "value": 90,
                "confidence": 85
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 15,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 80,
                "confidence": 75
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 95,
                "confidence": 90
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
            "dateOfBirth": "1979-06",
            "deceased": false,
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
                "value": 85,
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
                "value": 30,
                "confidence": 75
            },
            "machiavellianism": {
                "value": 20,
                "confidence": 70
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
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
                "value": 75,
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
            "dateOfBirth": "1961-08-04",
            "deceased": false,
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
    "Sam Altman": {
        "personalInfo": {
            "name": "Sam Altman",
            "age": 39,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Sam_Altman_2019.jpg/500px-Sam_Altman_2019.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "San Francisco, California",
            "dateOfBirth": "1985-03-22",
            "deceased": false,
            "jobTitles": [
                "CEO of OpenAI",
                "Former President of Y Combinator",
                "Entrepreneur",
                "AI Pioneer"
            ],
            "generatedAt": "2025-09-29T19:10:18.350117Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-sam-altman-the-IWDiLeIrSOKi9U1B.MnBrQ",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Sam_Altman",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://openai.com/",
                    "label": "OpenAI"
                }
            ],
            "biography": "**Sam Altman** is the CEO of OpenAI and one of the most influential figures in artificial intelligence development. As a visionary systems thinker, he has consistently advocated for AI that benefits all of humanity rather than maximizing shareholder value alone. His collaborative approach contrasts with typical Silicon Valley competitive thinking, demonstrating classic Green communitarian values with strong Yellow integrative tendencies.\n\nPreviously serving as President of Y Combinator from 2014 to 2019, Altman helped launch and mentor hundreds of startups including Airbnb, Dropbox, and Reddit. His strategic leadership during OpenAI's various crises, including the dramatic board situation in late 2023, demonstrated his ability to maintain focus on long-term goals under extreme pressure while showing genuine empathy and concern for others.\n\nAltman operates from post-conventional value systems, demonstrating exceptional intellectual curiosity and comfort with complexity. His testimony before the Senate advocating for AI regulation while maintaining innovation momentum exemplifies his integrative mindset and commitment to responsible AI development. His drive seems oriented toward significance and unique contribution rather than conventional success metrics, characteristic of Type 4 motivation with strong analytical systems-thinking dimension."
        },
        "stage": {
            "primary": "Green/Yellow",
            "confidence": 85
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 85
        },
        "enneagram": {
            "type": "4",
            "wing": "w5",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 95,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 70,
                "confidence": 70
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
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
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 85,
                "confidence": 85
            },
            "intrapersonal": {
                "value": 95,
                "confidence": 85
            },
            "naturalist": {
                "value": 50,
                "confidence": 30
            },
            "existential": {
                "value": 85,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 30,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 85
            },
            "kantianism": {
                "value": 85,
                "confidence": 85
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 85
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 90
            },
            "moral": {
                "value": 85,
                "confidence": 80
            },
            "psychosocial": {
                "value": 80,
                "confidence": 75
            },
            "leadership": {
                "value": 85,
                "confidence": 85
            },
            "worldview": {
                "value": 90,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Melinda French Gates": {
        "personalInfo": {
            "name": "Melinda French Gates",
            "age": 60,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Melinda_Gates_2011.jpg/500px-Melinda_Gates_2011.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "Seattle, Washington",
            "dateOfBirth": "1964-08-15",
            "deceased": false,
            "jobTitles": [
                "Philanthropist",
                "Co-founder of Gates Foundation",
                "Former Microsoft Executive",
                "Author",
                "Women's Rights Advocate"
            ],
            "generatedAt": "2025-09-29T18:45:17.510976Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-melinda-gates-PDUrn5Y5TC6ZwkB4Z9cBRA",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Melinda_French_Gates",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.melindafrenchgates.com/",
                    "label": "Official Website"
                }
            ],
            "biography": "**Melinda French Gates** demonstrates a Green/Yellow value orientation, prioritizing equity, empathy, and systemic change in her philanthropic and advocacy work. Her exceptional interpersonal and linguistic intelligence, combined with high conscientiousness and agreeableness, has made her one of the most influential philanthropists in addressing global health and gender equity issues.\n\nAfter a successful career at Microsoft where she demonstrated disciplined project management and strategic thinking, French Gates co-founded the Bill & Melinda Gates Foundation, focusing on transformational social systems and scalable philanthropic models. Her leadership style emphasizes empathetic listening and deep connection with communities, as reflected in her philosophy: \"Connect deeply with others. Our humanity is the one thing we all have in common.\"\n\nFrench Gates has shown remarkable resilience through major life transitions, including her high-profile divorce, while maintaining a constructive, forward-focused mindset. Her commitment to women's empowerment is exemplified in her belief that \"When we invest in women and girls, we are investing in the people who invest in everyone else.\" Her authentic leadership style, grounded in strong moral principles and genuine concern for human welfare, has established her as a respected voice in global philanthropy and social justice."
        },
        "stage": {
            "primary": "Green/Yellow",
            "confidence": 80
        },
        "mbti": {
            "type": "ENFJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "2",
            "wing": "w1",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 75,
                "confidence": 70
            },
            "spatial": {
                "value": 60,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 95,
                "confidence": 90
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 70,
                "confidence": 60
            },
            "existential": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 5,
                "confidence": 80
            },
            "machiavellianism": {
                "value": 5,
                "confidence": 80
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 85
            },
            "kantianism": {
                "value": 85,
                "confidence": 85
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 85
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 80
            },
            "moral": {
                "value": 95,
                "confidence": 90
            },
            "psychosocial": {
                "value": 90,
                "confidence": 85
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 90,
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
            "dateOfBirth": "1971-06-28",
            "deceased": false,
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
    "Hillary Clinton": {
        "personalInfo": {
            "name": "Hillary Clinton",
            "age": 77,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg/500px-Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "New York, United States",
            "dateOfBirth": "1947-10-26",
            "deceased": false,
            "jobTitles": [
                "Former Secretary of State",
                "Former U.S. Senator",
                "Former First Lady",
                "Presidential Candidate",
                "Lawyer",
                "Author"
            ],
            "generatedAt": "2025-09-29T18:41:47.296749Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-please-analyse-hillary-JHmR6SDtQfi1m49goQwzug",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Hillary_Clinton",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.hillaryclinton.com/",
                    "label": "Official Website"
                }
            ],
            "biography": "**Hillary Rodham Clinton** is a highly accomplished American politician, diplomat, lawyer, and author who has held some of the most prominent positions in U.S. government. As the first woman nominated for President by a major U.S. political party, she demonstrates exceptional organizational skills, policy expertise, and strategic political thinking, though she is characterized by limited emotional connectivity and deliberative decision-making patterns.\n\nClinton served as U.S. Secretary of State (2009-2013), U.S. Senator from New York (2001-2009), and First Lady of the United States (1993-2001). Her career trajectory from Republican to Democrat and her adaptation to changing political landscapes indicate cognitive flexibility and strategic evolution. Her Beijing speech declaring \"women's rights are human rights\" exemplifies her advocacy for social equity and systemic reform.\n\nThroughout her career, Clinton has demonstrated extraordinary conscientiousness and methodical preparation, earning recognition for her \"nerdy student\" approach to mastering policy details. Her psychological profile reveals a deliberative high-dominance introvert with strong analytical capabilities, though she faces challenges with spontaneous public connection. Despite political setbacks, she continues to advocate for democratic institutions and human rights through her post-political career writing and speaking."
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 50
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 85
        },
        "enneagram": {
            "type": "1",
            "wing": "w3",
            "confidence": 70
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 95,
                "confidence": 95
            },
            "extraversion": {
                "value": 15,
                "confidence": 85
            },
            "agreeableness": {
                "value": 30,
                "confidence": 80
            },
            "neuroticism": {
                "value": 50,
                "confidence": 50
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
                "value": 50,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 50,
                "confidence": 40
            },
            "existential": {
                "value": 75,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 70,
                "confidence": 80
            },
            "machiavellianism": {
                "value": 50,
                "confidence": 70
            },
            "psychopathy": {
                "value": 15,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 50,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 50,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 90,
                "confidence": 90
            },
            "moral": {
                "value": 80,
                "confidence": 75
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "leadership": {
                "value": 85,
                "confidence": 85
            },
            "worldview": {
                "value": 80,
                "confidence": 75
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
            "dateOfBirth": "1980",
            "deceased": false,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hank_Green_in_His_2023_Office_Tour.jpg/500px-Hank_Green_in_His_2023_Office_Tour.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "United States",
            "jobTitles": [
                "YouTuber",
                "Science Communicator",
                "Author",
                "Entrepreneur"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z",
            "websites": [
                {
                    "url": "https://www.facebook.com/hankgreen",
                    "label": "Facebook"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Hank_Green",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.youtube.com/@hankgreen",
                    "label": "YouTube"
                }
            ],
            "biography": "Hank Green is a science communicator, entrepreneur, and co-founder of the educational YouTube channels Vlogbrothers and SciShow. Through his engaging content and innovative approach to education, he has made complex scientific concepts accessible to millions of viewers worldwide. His work exemplifies the integration of entertainment and education, demonstrating high levels of interpersonal intelligence and communication skills."
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
    "Steven Bartlett": {
        "personalInfo": {
            "name": "Steven Bartlett",
            "age": 32,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Steven_Bartlett_The_Diary_Of_A_CEO.jpg/330px-Steven_Bartlett_The_Diary_Of_A_CEO.jpg",
            // "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Steven_Bartlett_at_The_Marketing_Society_Annual_Conference_2019.jpg/500px-Steven_Bartlett_at_The_Marketing_Society_Annual_Conference_2019.jpg",
            "countryOfOrigin": "United Kingdom",
            "currentResidence": "Manchester, United Kingdom",
            "dateOfBirth": "1992-08-26",
            "deceased": false,
            "jobTitles": [
                "Entrepreneur",
                "Dragons' Den Investor",
                "Podcast Host",
                "Author",
                "CEO of Social Chain"
            ],
            "generatedAt": "2025-09-29T19:13:29.087410Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-steven-bartlett-dk10IiQERmyDbryNrPlB8w",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.youtube.com/TheDiaryOfACEO",
                    "label": "YouTube"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Steven_Bartlett_(businessman)",
                    "label": "Wikipedia"
                }
            ],
            "biography": "**Steven Bartlett** embodies a values-driven, empathetic leadership style rooted in authenticity and resilience, underpinned by strong interpersonal and intrapersonal skills. His communication emphasizes vulnerability and kindness, aligning primarily with Green values and exhibiting emerging Yellow flexibility through his systems-oriented approach to culture design and pragmatic adaptability.\n\nAs the host of a top-five global podcast 'The Diary of a CEO' and Dragons' Den investor, Bartlett demonstrates exceptional linguistic and interpersonal intelligence, excelling in storytelling, interviewing high-profile figures, and authoring bestselling books. His advocacy for creative problem-solving, innovation in Social Chain's viral campaigns, and continual self-education reflect high openness to experience and conscientiousness.\n\nBartlett's leadership philosophy centers on psychological safety and authentic connection in team culture, stating 'Kindness is non-negotiable' as a CEO. His ability to build workplaces on empathy, reframe conflicts compassionately, and enforce anti-bullying with zero tolerance demonstrates high agreeableness combined with strong achievement drive. Despite prominent self-belief, he maintains remarkable humility by crediting team contributions and showing vulnerability, reflecting his commitment to treating others as ends in themselves and maintaining trust in people's positivity."
        },
        "stage": {
            "primary": "Green",
            "confidence": 50,
            // "secondary": "Yellow tendencies"
        },
        "mbti": {
            "type": "ENFJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "3",
            "wing": "w2",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 85,
                "confidence": 85
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 90
            },
            "logicalMathematical": {
                "value": 50,
                "confidence": 70
            },
            "spatial": {
                "value": 60,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 50
            },
            "interpersonal": {
                "value": 95,
                "confidence": 90
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 60,
                "confidence": 50
            },
            "existential": {
                "value": 80,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 30,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 85
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 85,
                "confidence": 80
            },
            "moral": {
                "value": 85,
                "confidence": 80
            },
            "psychosocial": {
                "value": 90,
                "confidence": 85
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 80,
                "confidence": 75
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Theo": {
        "personalInfo": {
            "name": "Theo",
            // "age": null,
            // "profilePicture": null,
            // "countryOfOrigin": null,
            // "currentResidence": null,
            // "dateOfBirth": null,
            "deceased": false,
            "jobTitles": [
                "Software Developer",
                "Tech YouTuber",
                "Content Creator",
                "Tech Educator",
                "Open Source Contributor"
            ],
            "generatedAt": "2025-09-29T19:14:46.254042Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-tech-youtuber-Ta2r2V6gQBCMDCoOhzWy1Q",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://t3.gg",
                    "label": "Official Website"
                },
                {
                    "url": "https://www.youtube.com/@t3dotgg",
                    "label": "YouTube"
                }
            ],
            "biography": "**Theo** consistently demonstrates a strategic, results-oriented mindset grounded in pragmatic problem-solving and contrarian analysis, reflecting Orange/Yellow value systems. His content style features rapid, logic-driven rants and deep technical tutorials that showcase his expertise in modern software development, particularly focusing on technologies like React, tRPC, and Prisma.\n\nDemonstrating exceptional logical-mathematical intelligence through deep code analysis and architectural design, Theo provides clear, persuasive content through video and blog formats that help the developer community navigate complex technical decisions. His regular, detailed tutorials and systematic approach to technology education reflect high conscientiousness combined with innovative exploration of diverse technologies.\n\nTheo's assertive challenge to established norms and comfort with technical debates point to a Challenger personality type, while his focus on community benefit through open-source contributions and transparent motives in his educational content demonstrate high humanistic values. His emphasis on empirical testing, competitive improvement, and personal autonomy in technical decision-making exemplifies the Orange value system, while his exploration of integrative, systemic topics like AI impacts and ecosystem interdependence indicates emergent Yellow thinking patterns."
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 70
        },
        "mbti": {
            "type": "ENTP",
            "confidence": 50
        },
        "enneagram": {
            "type": "8",
            "wing": "w7",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 50,
                "confidence": 70
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 90
            },
            "spatial": {
                "value": 70,
                "confidence": 60
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 50,
                "confidence": 70
            },
            "naturalist": {
                "value": 50,
                "confidence": 30
            },
            "existential": {
                "value": 70,
                "confidence": 60
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 30,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 30,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 90,
                "confidence": 85
            },
            "moral": {
                "value": 80,
                "confidence": 75
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "leadership": {
                "value": 75,
                "confidence": 70
            },
            "worldview": {
                "value": 80,
                "confidence": 75
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Larry Page": {
        "personalInfo": {
            "name": "Larry Page",
            "age": 51,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009.jpg/500px-Larry_Page_in_the_European_Parliament%2C_17.06.2009.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "Palo Alto, California",
            "dateOfBirth": "1973-03-26",
            "deceased": false,
            "jobTitles": [
                "Google Co-founder",
                "Former CEO of Google",
                "Former CEO of Alphabet",
                "Computer Scientist",
                "Entrepreneur"
            ],
            "generatedAt": "2025-09-29T19:14:46.254591Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/Comprehensive-Psychometric-Analysis-of-Google-Co-F.md",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Larry_Page",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://abc.xyz/",
                    "label": "Alphabet Inc."
                }
            ],
            "biography": "**Larry Page** is the co-founder of Google and exhibits the psychological profile of an intellectual innovator and ethical leader, demonstrating exceptionally high openness to experience and conscientiousness combined with strong emotional stability and profound humanitarian values. Operating primarily from Orange (Achievement) and Green (Communitarian) levels, Page's systematic approach to organizing the world's information reflects his commitment to both technological excellence and ethical principles.\n\nPage demonstrates classic introverted thinking dominance through his systematic approach to problem-solving and obsession with logical efficiency, preferring to work behind the scenes with a reserved, task-focused orientation. His revolutionary approach to search technology, willingness to pursue seemingly impossible moonshot projects, and continuous exploration of emerging technologies like AI and autonomous vehicles showcase his exceptional openness to experience.\n\nHis famous management tenets emphasizing that 'ideas are more important than age' and his opposition to hierarchical bureaucracy reflect advanced Green values of egalitarianism, while his focus on 10x thinking and moonshot projects demonstrates Orange achievement orientation. Despite massive success, Page maintains a humble public persona and avoids self-aggrandizing behavior, reflecting his strong humanitarian values and ethical approach to technology development that prioritizes user welfare over profit maximization."
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 50
        },
        "mbti": {
            "type": "INTP",
            "confidence": 50
        },
        "enneagram": {
            "type": "5",
            "wing": "w6",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 15,
                "confidence": 85
            },
            "agreeableness": {
                "value": 50,
                "confidence": 70
            },
            "neuroticism": {
                "value": 15,
                "confidence": 75
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 85,
                "confidence": 85
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 60,
                "confidence": 50
            },
            "existential": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 5,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 5,
                "confidence": 85
            },
            "psychopathy": {
                "value": 5,
                "confidence": 90
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 95,
                "confidence": 75
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "leadership": {
                "value": 85,
                "confidence": 80
            },
            "worldview": {
                "value": 90,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Sergey Brin": {
        "personalInfo": {
            "name": "Sergey Brin",
            "age": 51,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/500px-Sergey_Brin_cropped.jpg",
            "countryOfOrigin": "Russia/United States",
            "currentResidence": "Los Altos, California",
            "dateOfBirth": "1973-08-21",
            "deceased": false,
            "jobTitles": [
                "Google Co-founder",
                "President of Alphabet",
                "Computer Scientist",
                "Entrepreneur",
                "AI Researcher"
            ],
            "generatedAt": "2025-09-29T19:14:46.255000Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/Comprehensive-Psychometric-Analysis-of-Google-Co-F.md",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Sergey_Brin",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://abc.xyz/",
                    "label": "Alphabet Inc."
                }
            ],
            "biography": "**Sergey Brin** is the co-founder of Google who exhibits remarkably similar core psychological traits to his co-founder Larry Page as an intellectual innovator and ethical leader, with key distinctions in his higher agreeableness and social engagement. Brin demonstrates exceptionally high openness to experience and conscientiousness, combined with strong emotional stability and profound humanitarian values, while showing stronger Green communitarian values through his emphasis on collaborative decision-making and inclusive leadership.\n\nBrin functions at Orange/Green levels with his mathematical approach to innovation (the 70-20-10 rule) demonstrating Orange rational thinking, while his focus on using AI for humanitarian purposes and commitment to ethical technology development reflects Green ecological awareness. Characterized as 'the joker' who is more outgoing and socially engaging, Brin shows significantly higher interpersonal intelligence than Page, evidenced by his collaborative leadership style and ability to build consensus.\n\nDemonstrating strong introverted thinking dominance with more pronounced extraverted intuition expression in his experimental approach, Brin's willingness to explore seemingly unrelated technologies and his collaborative style suggest well-developed feeling functions that enable him to consider team dynamics and interpersonal harmony. His return to Google in 2023 specifically to work on AI demonstrates the Type 5 pattern of re-engaging when sufficiently motivated by intellectual challenge, combined with his commitment to using technology for societal benefit and transparent, caring approach to leadership."
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 50
        },
        "mbti": {
            "type": "INTP",
            "confidence": 50
        },
        "enneagram": {
            "type": "5",
            "wing": "w6",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 80
            },
            "agreeableness": {
                "value": 85,
                "confidence": 75
            },
            "neuroticism": {
                "value": 20,
                "confidence": 75
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 85,
                "confidence": 85
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 85,
                "confidence": 85
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 60,
                "confidence": 50
            },
            "existential": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 5,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 5,
                "confidence": 90
            },
            "psychopathy": {
                "value": 5,
                "confidence": 90
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 95,
                "confidence": 70
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 85,
                "confidence": 80
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 90,
                "confidence": 80
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Angela Merkel": {
        "personalInfo": {
            "name": "Angela Merkel",
            "age": 70,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Angela_Merkel_2019.jpg/500px-Angela_Merkel_2019.jpg",
            "countryOfOrigin": "Germany",
            "currentResidence": "Berlin, Germany",
            "dateOfBirth": "1954-07-17",
            "deceased": false,
            "jobTitles": [
                "Former Chancellor of Germany",
                "Former Leader of CDU",
                "Politician",
                "Scientist",
                "Quantum Chemistry PhD"
            ],
            "generatedAt": "2025-09-29T19:11:20.630835Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-former-chancell-HthqDZr3St6u.MdSJzz7aQ",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Angela_Merkel",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.bundeskanzlerin.de/",
                    "label": "Former Official Site"
                }
            ],
            "biography": "**Angela Merkel** is a highly analytical, pragmatic, and consensus-driven leader known for her rational, measured communication and commitment to stability and international cooperation. Her scientific background, holding a doctorate in quantum chemistry, demonstrates her exceptional logical-mathematical intelligence and methodical approach to complex problem-solving that she applied throughout her 16-year tenure as German Chancellor.\n\nMerkel's leadership style emphasized careful deliberation, scientific reasoning, and a preference for incremental change over ideological confrontation, reflecting her high conscientiousness, moderate openness, and strong sense of responsibility. Her approach was marked by empathy, restraint, and a notable absence of self-aggrandizement, consistently seeking consensus and avoiding unnecessary conflict while making difficult decisions such as her humanitarian response during the migrant crisis.\n\nOperating from Orange/Green values with Yellow tendencies, Merkel's decision-making was grounded in rational analysis, evidence, and pragmatism while emphasizing solidarity, social cohesion, and humanitarian responses. Her integrative, systems-oriented approach—balancing diverse interests, adapting to complexity, and seeking practical solutions—demonstrated emergent integrative traits, making her one of the most respected and stable leaders in modern European politics. Her legacy is marked by integrity, responsibility, and improvement of systems with a calm, non-confrontational demeanor that earned her the nickname 'Mutti' (Mother) among Germans."
        },
        "stage": {
            "primary": "Orange/Green",
            "confidence": 80,
            // "secondary": "Yellow tendencies"
        },
        "mbti": {
            "type": "ISTJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "1",
            "wing": "w9",
            "confidence": 85
        },
        "oceanTraits": {
            "openness": {
                "value": 70,
                "confidence": 50
            },
            "conscientiousness": {
                "value": 95,
                "confidence": 95
            },
            "extraversion": {
                "value": 30,
                "confidence": 50
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 70,
                "confidence": 60
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 70,
                "confidence": 50
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 70,
                "confidence": 60
            },
            "existential": {
                "value": 80,
                "confidence": 75
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 5,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 95
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 85
            },
            "kantianism": {
                "value": 85,
                "confidence": 85
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 90,
                "confidence": 90
            },
            "psychosocial": {
                "value": 80,
                "confidence": 75
            },
            "leadership": {
                "value": 90,
                "confidence": 85
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


    "Peter Attia": {
        "personalInfo": {
            "name": "Peter Attia",
            "age": 51,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_Attia_2019.jpg/500px-Peter_Attia_2019.jpg",
            "countryOfOrigin": "Canada",
            "currentResidence": "Austin, Texas",
            "dateOfBirth": "1973-03-19",
            "deceased": false,
            "jobTitles": [
                "Physician",
                "Longevity Expert",
                "Podcast Host",
                "Author",
                "The Drive Host"
            ],
            "generatedAt": "2025-09-29T19:13:29.087799Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-peter-attia-the-fxgYqC3NR1G6i4yzzo4Lqw",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://peterattiamd.com/",
                    "label": "Official Website"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Peter_Attia",
                    "label": "Wikipedia"
                }
            ],
            "biography": "**Dr. Peter Attia** represents a fascinating case study in high-achieving perfectionism, analytical precision, and the psychological costs of relentless self-optimization. As the host of The Drive podcast and author of the bestselling book 'Outlive,' Attia has built his professional identity around the pursuit of longevity and health optimization, while simultaneously engaging in a very public journey of emotional healing and self-discovery.\n\nAttia exhibits the psychological profile of a highly driven, analytically-minded perfectionist whose relentless pursuit of excellence has both propelled his professional success and created significant personal challenges. His communication patterns reveal strong systematic thinking, meticulous attention to detail, and an obsessive drive for precision that manifests across all domains of his life—from archery and race car driving to medical research and podcast preparation (40+ hours per episode).\n\nOperating primarily from Orange (achievement-oriented, scientific rationalism) with strong emerging Green (holistic health, emotional integration) characteristics, Attia's recent emphasis on emotional health as equally important to physical health demonstrates significant personal growth. His willingness to explore therapy at The Bridge to Recovery and publicly discuss his emotional struggles represents a Green-level integration of emotional and spiritual dimensions previously neglected in his Orange-focused approach, making him a uniquely transparent figure in the health optimization space."
        },
        "stage": {
            "primary": "Orange/Green",
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
                "value": 95,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 95,
                "confidence": 90
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 50,
                "confidence": 50
            },
            "neuroticism": {
                "value": 70,
                "confidence": 50
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 70,
                "confidence": 60
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 85,
                "confidence": 80
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 60,
                "confidence": 50
            },
            "existential": {
                "value": 85,
                "confidence": 80
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 30,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 15,
                "confidence": 50
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
                "value": 85,
                "confidence": 80
            },
            "faithInHumanity": {
                "value": 50,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 80,
                "confidence": 75
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "leadership": {
                "value": 80,
                "confidence": 75
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

    "Leonardo da Vinci": {
        "personalInfo": {
            "name": "Leonardo da Vinci",
            "age": 67,
            "dateOfBirth": "1452-04-15",
            "deceased": true,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/500px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
            "countryOfOrigin": "Italy",
            "currentResidence": "France",
            "jobTitles": [
                "Renaissance Polymath",
                "Artist",
                "Inventor",
                "Scientist",
                "Engineer"
            ],
            "generatedAt": "2025-08-24T19:43:00.000Z",
            "websites": [
                {
                    "url": "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-leonardo-da-vin-lr80FknHTAGJy_LRqv8Fxg",
                    "label": "Perplexity Results"
                }
            ],
            "biography": "**Leonardo da Vinci** was the archetypal **Renaissance man**, whose genius spanned art, science, engineering, and philosophy.\n\nHis insatiable curiosity and innovative thinking made him one of history's most influential figures, creating masterpieces like the [Mona Lisa](https://en.wikipedia.org/wiki/Mona_Lisa) while simultaneously designing flying machines and studying human anatomy. His interdisciplinary approach to knowledge exemplifies the highest levels of cognitive development and creative intelligence."
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
    "Marques Brownlee": {
        "personalInfo": {
            "name": "Marques Brownlee",
            "age": 31,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marques_Brownlee_2017.jpg/500px-Marques_Brownlee_2017.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "New Jersey, United States",
            "dateOfBirth": "1993-12-03",
            "deceased": false,
            "jobTitles": [
                "Tech YouTuber",
                "Technology Reviewer",
                "Content Creator",
                "Entrepreneur",
                "MKBHD Host"
            ],
            "generatedAt": "2025-09-29T18:41:47.297169Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-tech-youtuber-Ta2r2V6gQBCMDCoOhzWy1Q",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.youtube.com/@mkbhd",
                    "label": "YouTube"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Marques_Brownlee",
                    "label": "Wikipedia"
                }
            ],
            "biography": "**Marques Brownlee**, known as MKBHD, is one of the most influential technology reviewers on YouTube, exemplifying a technology-driven, achievement-oriented approach characterized by innovation, analytical rigor, and transparency. His methodical approach to tech reviews, scripting 98% of his content to ensure precision and maintaining editorial independence, has earned him widespread trust in the tech community.\n\nBrownlee demonstrates exceptional analytical skills through his detailed breakdowns of tech specifications and performance tests, combined with advanced visual composition and minimalist precision in his video production. His interviews with major tech leaders, including Apple's Tim Cook, showcase his ability to ask insightful, future-oriented questions that probe industry philosophy and direction.\n\nDespite his massive following and influence, Brownlee maintains remarkable humility and transparency, proactively addressing mistakes and controversies with genuine apologies. His commitment to honest reviews, refusing paid endorsements and early copy approvals, reflects his strong ethical framework and dedication to serving his audience's interests over commercial pressures. His consistent focus on practical mastery, technological progress, and measurable results exemplifies modern digital-age expertise and influence."
        },
        "stage": {
            "primary": "Orange",
            "confidence": 85
        },
        "mbti": {
            "type": "INTJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "5",
            "wing": "w6",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 85,
                "confidence": 85
            },
            "neuroticism": {
                "value": 15,
                "confidence": 85
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 85
            },
            "spatial": {
                "value": 85,
                "confidence": 85
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 50
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 50,
                "confidence": 40
            },
            "existential": {
                "value": 70,
                "confidence": 60
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 5,
                "confidence": 80
            },
            "machiavellianism": {
                "value": 30,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 90,
                "confidence": 85
            },
            "moral": {
                "value": 85,
                "confidence": 80
            },
            "psychosocial": {
                "value": 75,
                "confidence": 75
            },
            "leadership": {
                "value": 80,
                "confidence": 75
            },
            "worldview": {
                "value": 80,
                "confidence": 75
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
            "dateOfBirth": "1964-01-12",
            "deceased": false,
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
    "Warren Buffett": {
        "personalInfo": {
            "name": "Warren E. Buffett",
            "age": 94,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/500px-Warren_Buffett_KU_Visit.jpg",
            "countryOfOrigin": "United States",
            "currentResidence": "Omaha, Nebraska",
            "dateOfBirth": "1930-08-30",
            "deceased": false,
            "jobTitles": [
                "CEO of Berkshire Hathaway",
                "Investor",
                "Philanthropist",
                "Business Magnate",
                "Oracle of Omaha"
            ],
            "generatedAt": "2025-09-29T19:13:29.088237Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-warren-buffett-uL864S.sS1iHDutpEh6J_g",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://www.berkshirehathaway.com/",
                    "label": "Berkshire Hathaway"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Warren_Buffett",
                    "label": "Wikipedia"
                }
            ],
            "biography": "**Warren E. Buffett** exhibits a predominantly Orange value orientation focused on long-term economic achievement, with a secondary Green emphasis on ethical stewardship and philanthropy. Known as the 'Oracle of Omaha,' his investment philosophy emphasizes disciplined wealth creation, long-term value, and rigorous rational analysis—hallmarks of systematic, achievement-oriented thinking combined with remarkable emotional stability and principled decision-making.\n\nBuffett's psychological profile reveals extremely high conscientiousness and very low neuroticism, demonstrated through his disciplined, meticulous analysis and long-term consistency in investment strategies. His preference for proven business models over novel trends, combined with his introverted approach of sourcing energy from solitary reading and analysis, reflects his systematic cognitive style that relies on past precedents and thorough memory of company fundamentals.\n\nDemonstrating exceptional logical-mathematical and linguistic intelligence, Buffett is renowned as a masterful annual-letter writer who conveys complex investment ideas in simple, accessible prose. His commitment to giving away 99% of his fortune through the Giving Pledge reflects his Green-level concern for societal well-being, while his humble, straightforward dealings and long-term trust in business partnerships demonstrate high Light Triad characteristics. His lifelong commitment to principled investing, moral integrity, and ethical consistency has made him not just one of the world's most successful investors, but also one of its most respected business leaders."
        },
        "stage": {
            "primary": "Orange",
            "confidence": 85,
            // "secondary": "Green",
            // "secondaryConfidence": 50
        },
        "mbti": {
            "type": "ISTJ",
            "confidence": 80
        },
        "enneagram": {
            "type": "1",
            "wing": "w9",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 15,
                "confidence": 80
            },
            "conscientiousness": {
                "value": 95,
                "confidence": 95
            },
            "extraversion": {
                "value": 15,
                "confidence": 80
            },
            "agreeableness": {
                "value": 70,
                "confidence": 75
            },
            "neuroticism": {
                "value": 5,
                "confidence": 90
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 90
            },
            "logicalMathematical": {
                "value": 95,
                "confidence": 95
            },
            "spatial": {
                "value": 60,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 50,
                "confidence": 30
            },
            "interpersonal": {
                "value": 50,
                "confidence": 70
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 85
            },
            "naturalist": {
                "value": 50,
                "confidence": 40
            },
            "existential": {
                "value": 75,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 15,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 30,
                "confidence": 50
            },
            "psychopathy": {
                "value": 5,
                "confidence": 90
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 85,
                "confidence": 50
            },
            "kantianism": {
                "value": 85,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 85,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 95,
                "confidence": 95
            },
            "moral": {
                "value": 90,
                "confidence": 85
            },
            "psychosocial": {
                "value": 75,
                "confidence": 70
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 80,
                "confidence": 75
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Benjamin Netanyahu": {
        "personalInfo": {
            "name": "Benjamin Netanyahu",
            "age": 75,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Benjamin_Netanyahu_2018.jpg/500px-Benjamin_Netanyahu_2018.jpg",
            "countryOfOrigin": "Israel",
            "currentResidence": "Jerusalem, Israel",
            "dateOfBirth": "1949-10-21",
            "deceased": false,
            "jobTitles": [
                "Prime Minister of Israel",
                "Politician",
                "Former Ambassador to UN",
                "Author",
                "Military Officer"
            ],
            "generatedAt": "2025-09-29T18:45:17.510518Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-the-prime-mini-.E5TfDSDQKWOvAs6tBx43g",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Benjamin_Netanyahu",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.gov.il/en/prime-minister",
                    "label": "Official PMO"
                }
            ],
            "biography": "**Benjamin Netanyahu** is Israel's longest-serving Prime Minister, characterized by strategic achievement orientation and strong leadership during periods of national security challenges. His psychological profile reveals a highly ambitious, analytically-driven leader with exceptional organizational skills and strategic vision, though challenged by polarizing communication patterns and high dark triad traits.\n\nNetanyahu served in elite IDF units before pursuing academic achievements at MIT, demonstrating both physical courage and intellectual capability. His emphasis on economic liberalization through privatizations, tax cuts, and deregulation exemplifies Orange-level strategic thinking, while his insistence on Israel's Jewish-state identity reflects Blue-level traditionalism and order.\n\nThroughout his political career, Netanyahu has demonstrated extraordinary resilience under pressure and sustained effectiveness in protracted conflicts, though his approach often emphasizes security over conciliation. His charismatic addresses to international forums like the U.S. Congress and UN General Assembly showcase his exceptional linguistic intelligence and strategic communication skills, making him one of the most recognizable and influential political figures in international relations."
        },
        "stage": {
            "primary": "Orange",
            "confidence": 85
        },
        "mbti": {
            "type": "ENTJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "3",
            "wing": "w4",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 85,
                "confidence": 85
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 85,
                "confidence": 85
            },
            "agreeableness": {
                "value": 15,
                "confidence": 80
            },
            "neuroticism": {
                "value": 50,
                "confidence": 60
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 95,
                "confidence": 90
            },
            "logicalMathematical": {
                "value": 85,
                "confidence": 80
            },
            "spatial": {
                "value": 60,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 15,
                "confidence": 70
            },
            "interpersonal": {
                "value": 85,
                "confidence": 80
            },
            "intrapersonal": {
                "value": 50,
                "confidence": 60
            },
            "naturalist": {
                "value": 50,
                "confidence": 40
            },
            "existential": {
                "value": 75,
                "confidence": 70
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 85,
                "confidence": 50
            },
            "machiavellianism": {
                "value": 85,
                "confidence": 50
            },
            "psychopathy": {
                "value": 70,
                "confidence": 75
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 15,
                "confidence": 50
            },
            "kantianism": {
                "value": 15,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 15,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 90,
                "confidence": 85
            },
            "moral": {
                "value": 40,
                "confidence": 70
            },
            "psychosocial": {
                "value": 70,
                "confidence": 70
            },
            "leadership": {
                "value": 90,
                "confidence": 85
            },
            "worldview": {
                "value": 70,
                "confidence": 75
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Saddam Hussein": {
        "personalInfo": {
            "name": "Saddam Hussein",
            "age": 69,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Saddam_Hussein_at_trial%2C_July_2004-edit1.JPEG/500px-Saddam_Hussein_at_trial%2C_July_2004-edit1.JPEG",
            "countryOfOrigin": "Iraq",
            // "currentResidence": null,
            "dateOfBirth": "1937-04-28",
            "deceased": true,
            "jobTitles": [
                "Former President of Iraq",
                "Ba'ath Party Leader",
                "Dictator",
                "Military Leader",
                "Revolutionary"
            ],
            "generatedAt": "2025-09-29T19:11:20.631271Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/can-you-analyse-saddam-hussein-CWkP7NOLTs._XUDZU_CsBg",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Saddam_Hussein",
                    "label": "Wikipedia"
                },
                {
                    "url": "https://www.britannica.com/biography/Saddam-Hussein",
                    "label": "Britannica"
                }
            ],
            "biography": "**Saddam Hussein** was characterized by ruthless, centralized control and a pervasive cult of personality underpinned by power-driven, authoritarian values, aligning primarily with the Red value system and secondarily with Blue (order and authority). His regime demonstrated strategic vision, decisiveness, and exceptionally low empathy, coupled with very high conscientiousness and extraversion in pursuit of absolute control.\n\nHussein's leadership exhibited hallmark traits of strategic decision-making and efficient enforcement of policies, combined with long-term planning capabilities and ideological framing as 'defender of Arabism.' His systematic nationalization of oil, infrastructure campaigns, and meticulous party organization demonstrated high conscientiousness, while his frequent public speeches and charismatic mobilization reflected strong extraversion.\n\nManifesting pronounced Dark Triad features, Hussein displayed grandiose self-image through omnipresent propaganda and personal glorification, cynical manipulation through networks of informants and execution of opponents, and instrumental violence including use of chemical weapons and mass executions. His mastery of political manipulation, mass mobilization, and surveillance networks demonstrated very high interpersonal intelligence, though applied for authoritarian control rather than benevolent leadership. His regime was marked by the absence of universal moral concern beyond regime objectives, utilizing torture, genocide, and political repression as tools of state control."
        },
        "stage": {
            "primary": "Red/Blue",
            "confidence": 75
        },
        "mbti": {
            "type": "ENTJ",
            "confidence": 50
        },
        "enneagram": {
            "type": "8",
            "wing": "w7",
            "confidence": 50
        },
        "oceanTraits": {
            "openness": {
                "value": 50,
                "confidence": 50
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 85,
                "confidence": 85
            },
            "agreeableness": {
                "value": 15,
                "confidence": 90
            },
            "neuroticism": {
                "value": 15,
                "confidence": 50
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 75,
                "confidence": 70
            },
            "logicalMathematical": {
                "value": 85,
                "confidence": 50
            },
            "spatial": {
                "value": 60,
                "confidence": 40
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 60,
                "confidence": 40
            },
            "interpersonal": {
                "value": 95,
                "confidence": 50
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 50
            },
            "naturalist": {
                "value": 50,
                "confidence": 30
            },
            "existential": {
                "value": 70,
                "confidence": 50
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 95,
                "confidence": 90
            },
            "machiavellianism": {
                "value": 95,
                "confidence": 90
            },
            "psychopathy": {
                "value": 85,
                "confidence": 85
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 15,
                "confidence": 50
            },
            "kantianism": {
                "value": 15,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 15,
                "confidence": 50
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 75,
                "confidence": 70
            },
            "moral": {
                "value": 10,
                "confidence": 90
            },
            "psychosocial": {
                "value": 30,
                "confidence": 75
            },
            "leadership": {
                "value": 80,
                "confidence": 80
            },
            "worldview": {
                "value": 40,
                "confidence": 70
            }
        },
        "specialStatus": {
            "type": null,
            "level": null
        }
    },
    "Vladimir Putin": {
        "personalInfo": {
            "name": "Vladimir Putin",
            "age": 72,
            "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg/500px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg",
            // "profilePicture": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Vladimir_Putin_%282017-07-08%29.jpg/500px-Vladimir_Putin_%282017-07-08%29.jpg",
            "countryOfOrigin": "Russia",
            "currentResidence": "Moscow, Russia",
            "dateOfBirth": "1952-10-07",
            "deceased": false,
            "jobTitles": [
                "President of Russia",
                "Former KGB Officer",
                "Former Prime Minister",
                "Political Leader",
                "Authoritarian Ruler"
            ],
            "generatedAt": "2025-09-29T19:10:18.350689Z",
            "websites": [
                {
                    "url": "https://www.perplexity.ai/search/please-analyse-russian-preside-Fcbzjqh1SPaJ85mJtGRWqw",
                    "label": "Perplexity Results"
                },
                {
                    "url": "https://en.wikipedia.org/wiki/Vladimir_Putin",
                    "label": "Wikipedia"
                },
                {
                    "url": "http://en.kremlin.ru/",
                    "label": "Official Kremlin"
                }
            ],
            "biography": "**Vladimir Putin** exhibits a highly controlling, narcissistic personality with pronounced Machiavellian tendencies, combined with strategic intelligence and deep-seated suspicion of external threats. His psychological profile reveals an individual driven by power consolidation, national dominance, and personal aggrandizement, while displaying limited empathy and pro-social characteristics.\n\nPutin's value system reflects a combination of Blue (traditional/conformist) and Red (power/egocentric) characteristics, emphasizing traditional Russian values, state hierarchy, and Orthodox Christianity while aggressively pursuing power, territorial expansion, and willingness to use force. His background in KGB intelligence work reinforced his systematic approach to governance and methodical consolidation of power over his 25+ years in leadership.\n\nDemonstrating exceptional linguistic abilities and sophisticated understanding of others' motivations, Putin uses these skills strategically for manipulation and control. His communication style reflects calculated image management through strategic use of physical activities and public appearances to project strength, combined with sophisticated use of propaganda and narrative manipulation. His proficiency in judo and deliberate cultivation of physical prowess as part of his public image demonstrates his systematic approach to power projection and political survival."
        },
        "stage": {
            "primary": "Red/Blue",
            "confidence": 50
        },
        "mbti": {
            "type": "ISTJ",
            "confidence": 75
        },
        "enneagram": {
            "type": "6",
            "wing": "w5",
            "confidence": 70
        },
        "oceanTraits": {
            "openness": {
                "value": 30,
                "confidence": 75
            },
            "conscientiousness": {
                "value": 85,
                "confidence": 85
            },
            "extraversion": {
                "value": 50,
                "confidence": 70
            },
            "agreeableness": {
                "value": 15,
                "confidence": 85
            },
            "neuroticism": {
                "value": 70,
                "confidence": 60
            }
        },
        "multipleIntelligences": {
            "linguistic": {
                "value": 85,
                "confidence": 85
            },
            "logicalMathematical": {
                "value": 70,
                "confidence": 75
            },
            "spatial": {
                "value": 60,
                "confidence": 50
            },
            "musical": {
                "value": 50,
                "confidence": 30
            },
            "bodilyKinesthetic": {
                "value": 70,
                "confidence": 75
            },
            "interpersonal": {
                "value": 85,
                "confidence": 50
            },
            "intrapersonal": {
                "value": 85,
                "confidence": 80
            },
            "naturalist": {
                "value": 50,
                "confidence": 40
            },
            "existential": {
                "value": 70,
                "confidence": 60
            }
        },
        "darkTriad": {
            "narcissism": {
                "value": 85,
                "confidence": 85
            },
            "machiavellianism": {
                "value": 95,
                "confidence": 90
            },
            "psychopathy": {
                "value": 85,
                "confidence": 80
            }
        },
        "lightTriad": {
            "humanism": {
                "value": 15,
                "confidence": 80
            },
            "kantianism": {
                "value": 30,
                "confidence": 50
            },
            "faithInHumanity": {
                "value": 15,
                "confidence": 85
            }
        },
        "developmentLines": {
            "cognitive": {
                "value": 80,
                "confidence": 80
            },
            "moral": {
                "value": 20,
                "confidence": 85
            },
            "psychosocial": {
                "value": 40,
                "confidence": 75
            },
            "leadership": {
                "value": 85,
                "confidence": 85
            },
            "worldview": {
                "value": 50,
                "confidence": 70
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
            "dateOfBirth": "1946-06-14",
            "deceased": false,
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