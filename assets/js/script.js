// Generate random affiliate ID (for POC only)
function generateAffiliateID() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Track events with GTM
function trackEvent(eventName, eventData) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': eventName,
        ...eventData
    });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Landing page join now button tracking
    const joinNowBtn = document.getElementById('joinNowBtn');
    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', function() {
            trackEvent('affiliate_signup_click', {
                'page_location': window.location.pathname
            });
        });
    }

    // Thank you page functionality
    const affiliateID = generateAffiliateID();
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref') || affiliateID;

    const affiliateIDElement = document.getElementById('affiliateID');
    if (affiliateIDElement) {
        affiliateIDElement.textContent = refParam;
        trackEvent('affiliate_signup_complete', {
            'affiliate_id': refParam,
            'page_location': window.location.pathname
        });
    }

    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            const affiliateURL = document.getElementById('affiliateURL').textContent + refParam;
            navigator.clipboard.writeText(affiliateURL).then(function() {
                trackEvent('affiliate_link_copy', {
                    'affiliate_id': refParam,
                    'copied_text': affiliateURL
                });
                copyLinkBtn.textContent = 'Copied!';
                setTimeout(function() {
                    copyLinkBtn.textContent = 'Copy Link';
                }, 2000);
            });
        });
    }
});
