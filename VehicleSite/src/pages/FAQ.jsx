import React from 'react';
import * as Components from '../components';
import { FAQ } from './Home';

const extraFAQ = { ...FAQ };  // Create a copy of FAQ to keep it separate from Home

// Add extra FAQs
extraFAQ["Bonus Question 1"] = "Bonus Answer 1";
extraFAQ["Bonus Question 2"] = "Bonus Answer 2";
extraFAQ["Bonus Question 3"] = "Bonus Answer 3";
extraFAQ["Bonus Question 4"] = "Bonus Answer 4";
extraFAQ["Bonus Question 5"] = "Bonus Answer 5";
extraFAQ["Bonus Question 6"] = "Bonus Answer 6";

const FAQPage = () => {
    const FAQ_Entries = Object.entries(extraFAQ);
    return (
        <div className='p-8 text-center'>
        {FAQ_Entries.map(([question, answer], index) => (
            <Components.FaqDropdown key={index} question={question} answer={answer} />
        ))}
        </div>
    );
};

export default FAQPage;