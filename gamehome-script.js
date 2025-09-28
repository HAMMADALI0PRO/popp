document.addEventListener('DOMContentLoaded', function() {
    // Task names array (repeating pattern)
    const taskNames = [
        'news read', 'video watch', 'website view', 'news read', 
        'news read', 'spin', 'website view', 'website view', 
        'website views', 'website view', 'spin', 'spin', 
        'news read', 'news read', 'video watch', 'video watch', 
        'video watch', 'video watch', 'video watch', 'video watch', 
        'video watch', 'news read', 'news read', 'website view',
        'website view', 'website view', 'website view', 'website view', 
        'website view', 'spin', 'spin', 'spin', 'spin'
    ];

    // 100+ Currencies List
    const currencies = [
        { code: 'USD', name: 'US Dollar', symbol: '$' },
        { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'GBP', name: 'British Pound', symbol: '£' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
        { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
        { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
        { code: 'MXN', name: 'Mexican Peso', symbol: 'MX$' },
        { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
        { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
        { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
        { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
        { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
        { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
        { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
        { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
        { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼' },
        { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD' },
        { code: 'OMR', name: 'Omani Rial', symbol: '﷼' },
        { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£' },
        { code: 'THB', name: 'Thai Baht', symbol: '฿' },
        { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
        { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
        { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
        { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
        { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
        { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs' },
        { code: 'NPR', name: 'Nepalese Rupee', symbol: 'Rs' },
        { code: 'AFN', name: 'Afghan Afghani', symbol: '؋' },
        { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د' },
        { code: 'IRR', name: 'Iranian Rial', symbol: '﷼' },
        { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD' },
        { code: 'DZD', name: 'Algerian Dinar', symbol: 'د.ج' },
        { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت' },
        { code: 'JOD', name: 'Jordanian Dinar', symbol: 'JD' },
        { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل' },
        { code: 'SYP', name: 'Syrian Pound', symbol: '£S' },
        { code: 'YER', name: 'Yemeni Rial', symbol: '﷼' },
        { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
        { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
        { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
        { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
        { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
        { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
        { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
        { code: 'RSD', name: 'Serbian Dinar', symbol: 'дин' },
        { code: 'ALL', name: 'Albanian Lek', symbol: 'L' },
        { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден' },
        { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM' },
        { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr' },
        { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U' },
        { code: 'COP', name: 'Colombian Peso', symbol: 'COL$' },
        { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/.' },
        { code: 'CLP', name: 'Chilean Peso', symbol: 'CLP$' },
        { code: 'ARS', name: 'Argentine Peso', symbol: 'ARS$' },
        { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs' },
        { code: 'PYG', name: 'Paraguayan Guarani', symbol: '₲' },
        { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡' },
        { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$' },
        { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q' },
        { code: 'HNL', name: 'Honduran Lempira', symbol: 'L' },
        { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'C$' },
        { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.' },
        { code: 'SVC', name: 'Salvadoran Colón', symbol: '₡' },
        { code: 'TTD', name: 'Trinidad & Tobago Dollar', symbol: 'TT$' },
        { code: 'XCD', name: 'East Caribbean Dollar', symbol: 'EC$' },
        { code: 'BBD', name: 'Barbadian Dollar', symbol: 'Bds$' },
        { code: 'BZD', name: 'Belize Dollar', symbol: 'BZ$' },
        { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$' },
        { code: 'BSD', name: 'Bahamian Dollar', symbol: 'B$' },
        { code: 'KYD', name: 'Cayman Islands Dollar', symbol: 'CI$' },
        { code: 'BMD', name: 'Bermudian Dollar', symbol: 'BD$' },
        { code: 'FJD', name: 'Fijian Dollar', symbol: 'FJ$' },
        { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K' },
        { code: 'SBD', name: 'Solomon Islands Dollar', symbol: 'SI$' },
        { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$' },
        { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VT' },
        { code: 'WST', name: 'Samoan Tala', symbol: 'WS$' },
        { code: 'XPF', name: 'CFP Franc', symbol: '₣' },
        { code: 'ANG', name: 'Netherlands Antillean Guilder', symbol: 'NAƒ' },
        { code: 'AWG', name: 'Aruban Florin', symbol: 'Afl.' },
        { code: 'BIF', name: 'Burundian Franc', symbol: 'FBu' },
        { code: 'CDF', name: 'Congolese Franc', symbol: 'FC' },
        { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fdj' },
        { code: 'GNF', name: 'Guinean Franc', symbol: 'FG' },
        { code: 'KMF', name: 'Comorian Franc', symbol: 'CF' },
        { code: 'RWF', name: 'Rwandan Franc', symbol: 'FRw' },
        { code: 'SCR', name: 'Seychellois Rupee', symbol: 'SR' },
        { code: 'SOS', name: 'Somali Shilling', symbol: 'Sh.So.' },
        { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
        { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh' },
        { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'Rf' },
        { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨' },
        { code: 'CVE', name: 'Cape Verdean Escudo', symbol: 'CVE' },
        { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D' },
        { code: 'GHS', name: 'Ghanaian Cedi', symbol: 'GH₵' },
        { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
        { code: 'SDG', name: 'Sudanese Pound', symbol: 'SDG' },
        { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK' },
        { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'Z$' }
    ];

    // Generate or get User ID
    function generateUserId() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let userId = '';
        for (let i = 0; i < 12; i++) {
            userId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return userId;
    }

    // Get stored User ID or generate new one
    function getOrCreateUserId() {
        let userId = localStorage.getItem('user_id');
        if (!userId) {
            userId = generateUserId();
            localStorage.setItem('user_id', userId);
            document.cookie = `user_id=${userId}; max-age=${365 * 24 * 60 * 60}; path=/`;
        }
        return userId;
    }

    // Get stored Balance or set default
    function getOrCreateBalance() {
        let balance = localStorage.getItem('user_balance');
        if (!balance) {
            balance = '0';
            localStorage.setItem('user_balance', balance);
            document.cookie = `user_balance=${balance}; max-age=${365 * 24 * 60 * 60}; path=/`;
        }
        return balance;
    }

    // Check if currency is already set
    function isCurrencySet() {
        return localStorage.getItem('user_currency') !== null;
    }

    // Get stored Currency or show selection
    function getOrCreateCurrency() {
        let currency = localStorage.getItem('user_currency');
        if (!currency) {
            // Show currency selection modal only if not set before
            setTimeout(showCurrencyModal, 1000); // Show after 1 second
            return 'USD'; // Default until user selects
        }
        return currency;
    }

    // Show currency selection modal
    function showCurrencyModal() {
        // Check again if currency is set (to avoid multiple modals)
        if (isCurrencySet()) {
            return;
        }
        
        const modal = document.getElementById('currencyModal');
        modal.style.display = 'flex';
        loadCurrencyList();
    }

    // Hide currency selection modal
    function hideCurrencyModal() {
        const modal = document.getElementById('currencyModal');
        modal.style.display = 'none';
    }

    // Load currencies in the list
    function loadCurrencyList(searchTerm = '') {
        const currencyList = document.getElementById('currencyList');
        currencyList.innerHTML = '';

        const filteredCurrencies = currencies.filter(currency => 
            currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            currency.code.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filteredCurrencies.forEach(currency => {
            const currencyItem = document.createElement('div');
            currencyItem.className = 'currency-item';
            currencyItem.innerHTML = `
                <span class="currency-name">${currency.name}</span>
                <span class="currency-symbol">${currency.code} (${currency.symbol})</span>
            `;
            
            currencyItem.addEventListener('click', function() {
                playClickSound();
                selectCurrency(currency.code);
            });
            
            currencyList.appendChild(currencyItem);
        });
    }

    // Select currency
    function selectCurrency(currencyCode) {
        // Store currency in localStorage and cookies
        localStorage.setItem('user_currency', currencyCode);
        document.cookie = `user_currency=${currencyCode}; max-age=${365 * 24 * 60 * 60}; path=/`;
        
        // Update display
        document.getElementById('currencyCode').textContent = currencyCode;
        
        // Hide modal
        hideCurrencyModal();
        
        console.log('Currency selected:', currencyCode);
    }

    // Play click sound (1 second only)
    function playClickSound() {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.currentTime = 0; // Reset to start
            clickSound.play().catch(function(error) {
                console.log('Sound play failed:', error);
            });
            
            // Stop sound after 1 second
            setTimeout(() => {
                clickSound.pause();
                clickSound.currentTime = 0;
            }, 1000);
        }
    }

    // Copy User ID to clipboard
    function copyUserIdToClipboard() {
        playClickSound();
        
        const userId = document.getElementById('userId').textContent;
        
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = userId;
        document.body.appendChild(tempTextArea);
        
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999);
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCopyMessage();
            }
        } catch (err) {
            console.log('Failed to copy text: ', err);
        }
        
        document.body.removeChild(tempTextArea);
    }

    // Show copy message
    function showCopyMessage() {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'block';
        
        setTimeout(function() {
            copyMessage.style.display = 'none';
        }, 2000);
    }

    // Generate 200 tasks
    function generateTasks() {
        const taskBoxes = document.getElementById('taskBoxes');
        taskBoxes.innerHTML = '';
        
        for (let i = 1; i <= 200; i++) {
            const taskIndex = (i - 1) % taskNames.length;
            const taskName = taskNames[taskIndex];
            
            const taskBox = document.createElement('div');
            taskBox.className = 'task-box';
            
            taskBox.innerHTML = `
                <div class="task-number">${i.toString().padStart(2, '0')}</div>
                <div class="task-text">${taskName}</div>
            `;
            
            taskBox.addEventListener('click', function() {
                playClickSound();
                console.log(`Task ${i} clicked: ${taskName}`);
            });
            
            taskBoxes.appendChild(taskBox);
        }
    }

    // Initialize page
    function initializePage() {
        // Set User ID
        const userId = getOrCreateUserId();
        document.getElementById('userId').textContent = userId;
        
        // Set Balance
        const balance = getOrCreateBalance();
        document.getElementById('userBalance').textContent = balance;
        
        // Set Currency (will show modal if not set)
        const currency = getOrCreateCurrency();
        document.getElementById('currencyCode').textContent = currency;
        
        // Generate tasks
        generateTasks();
        
        console.log('User ID:', userId);
        console.log('Balance:', balance);
        console.log('Currency:', currency);
        console.log('Currency Set:', isCurrencySet());
        console.log('200 tasks generated successfully');
    }

    // Event Listeners
    document.getElementById('userIdBox').addEventListener('click', function() {
        copyUserIdToClipboard();
    });

    document.getElementById('balanceBox').addEventListener('click', function() {
        playClickSound();
        window.location.href = 'balance.html';
    });

    // Currency search functionality
    document.getElementById('currencySearch').addEventListener('input', function(e) {
        loadCurrencyList(e.target.value);
    });

    // Prevent unwanted clicks
    document.addEventListener('click', function(e) {
        const target = e.target;
        const isUserIdBox = target.closest('#userIdBox');
        const isBalanceBox = target.closest('#balanceBox');
        const isTaskBox = target.closest('.task-box');
        const isCurrencyModal = target.closest('#currencyModal');
        
        if (!isUserIdBox && !isBalanceBox && !isTaskBox && !isCurrencyModal) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // Initialize the page
    initializePage();
});