import React from 'react'
import { haRa } from '@/app/layout'

function Page() {
  return (
    <div className='bg-orange-custom p-8 md:p-20'>
        <h1 className={`text-blue-600 font-semibold text-[40px] md:text-[56px] ${haRa.className}`}>Privacy Policy</h1>
        <h1 className='text-orange-600 font-semibold'>OVERVIEW</h1>
      This website is operated by International Society for Krishna Consciousness. Throughout the site, the terms “we”, “us” and “our” refer to International Society for Krishna Consciousness. International Society for Krishna Consciousness offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
      By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
      Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
      Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.

      <div className='flex flex-col gap-4 mt-8'>

      <div>
        <h1 className='text-orange-600 font-semibold'>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h1>
        When you purchase/donate something from our store/site, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.

When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.

Email marketing (if applicable): With your permission, we may send you emails about our store/site, new products and other updates..</div>
      <div>
        <h1 className='text-orange-600 font-semibold flex flex-col gap-2'>SECTION 2 – CONSENT</h1>
        <p>How do you get my consent?

When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
<p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
        <p>How do I withdraw my consent?

If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at email@gmail.com</p>
        </div>
      <div>
        <h1 className='text-orange-600 font-semibold'>SECTION 3 – DISCLOSURE</h1>
        We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
</div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-orange-600 font-semibold '>SECTION 4 – PAYMENT</h1>
        <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
        <p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
        <p>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.

For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com</p>
        </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-orange-600 font-semibold'>SECTION 5 – THIRD-PARTY SERVICES
</h1>
       <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
       <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
       <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
       <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
       <p>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.

Links

When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>

       </div>
      <div>
        <h1 className='text-orange-600 font-semibold'>SECTION 6 – SECURITY</h1>
        To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</div>
      <div>
        <h1 className='text-orange-600 font-semibold'>SECTION 7 – COOKIES</h1>
        We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</div>
      <div>
        <h1 className='text-orange-600 font-semibold'>SECTION 8 – AGE OF CONSENT
</h1>
       By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-orange-600 font-semibold'>SECTION 9 – CHANGES TO THIS PRIVACY POLICY
</h1>
        <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
        <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
        </div>
        </div>
    </div>
  )
}

export default Page
