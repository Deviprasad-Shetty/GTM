# Google Tag Manager Setup for Affiliate Tracking

1. **Create a new GTM container** at [tagmanager.google.com](https://tagmanager.google.com/)

2. **Tags:**
   - `affiliate_signup_click` - Triggered when "Join Now" is clicked on the landing page
   - `affiliate_signup_complete` - Triggered when the thank you page loads
   - `affiliate_link_copy` - Triggered when the affiliate link is copied

3. **Triggers:**
   - `affiliate_signup_click` - Click on ID `joinNowBtn`
   - `affiliate_signup_complete` - Page View of thank you page (URL contains `thankyou.html`)
   - `affiliate_link_copy` - Click on ID `copyLinkBtn`

4. **Variables:**
   - `Page Path`
   - `Click ID`
   - Custom JavaScript variable for `affiliate_id`
   - Custom JavaScript variable for `copied_text`

5. **Data Layer Configuration:**
   - Events are pushed to the data layer in `script.js`
