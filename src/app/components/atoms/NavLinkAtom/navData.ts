import { NavItem } from '@/app/components/atoms/components/Atoms/NavLinkAtom/navTypes';

export const navData: NavItem[] = [
    {
        id: 'products',
        title: 'Products',
        description: 'Learn how you can make the most of financial data',
        styleClass: 'ProductsCat'
        ,
        categories: [
            {
                icon: "/assets/images/MenuIcon/Accept.png",
                title: 'ACCEPTANCE',
                styleClass: 'acceptanceStyle'
                ,
                items: ['Paymob POS', 'Paymob Checkout', 'Paymob App', 'Invoicing', 'Advanced Settlements', 'Bills Payments', 'Payouts', 'Subscription', 'Digital Wallet', 'Installments', 'Sync',],
            },
            {
                icon: "/assets/images/MenuIcon/manage.png",
                title: 'MANAGE',
                styleClass: 'manageStyle'
                ,
                items: ['Dashboard & Reporting', 'Appointment Management', 'Tax Compliance']
            },
            {
                icon: "/assets/images/MenuIcon//Grow.png",
                title: 'GROW',
                styleClass: 'growStyle'
                ,
                items: ['Lending', 'BIN Discounting', 'Cashback - CRM']
            },
            {
                icon: "/assets/images/MenuIcon/Grow.png",
                title: 'GUARD',
                styleClass: 'guardStyle'
                ,
                items: ['Shield & Fraud Detection ', 'Chargeback Protection']
            }
        ]
    },
    {
        id: 'Business Types',
        title: 'Business Types',
        description: 'Millions of business of all sizes and industries trust Paymob to accept payments, and grow their business.',
        styleClass: 'BusinessCat'
        ,

        categories: [
            {
                title: 'BUSINESS SIZE',
                items: ['Enterprise Solution', 'SMEs Solutions']
            }, {
                title: 'INDUSTRY',
                items: ['Retail', 'F&B', 'Groceries', 'Fashion']
            }
        ]
    }, {
        id: 'Support',
        title: 'Support',
        description: 'A breakdown of everything you need to integrate with Paymob and learn about our APIs.',
        styleClass: 'SupportCat'
        ,
        categories: [
            {
                items: ['Help Center', 'FAQs', 'Developer Documentation']
            }
        ]
    }, {
        id: 'About Us',
        title: 'About Us',
        description: "Get to know us by our talents behind Paymob. Everything related to us could be found here.",
        styleClass: 'aboutCat'
        ,
        categories: [
            {
                title: 'COMPANY',
                items: ['About Paymob', 'Why Paymob', 'Careers & Culture', "Our Partners", "Become a Partner", 'Contact Us']
            },
            {
                title: 'INISIGHTS',
                items: ['Case Studies', 'Our Blog', 'Newsroom']
            }
        ]
    }
];