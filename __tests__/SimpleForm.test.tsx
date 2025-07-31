import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


import SimpleForm from '@/components/SimpleForm';

describe('SimpleForm Component', () => {
  beforeEach(() => {
    render(<SimpleForm />);
  });

  it('renders input and button', () => {
    expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('submits form and shows result', () => {
    // 👉 ইনপুট ফিল্ড এবং সাবমিট বাটন DOM থেকে বের করা হচ্ছে।
    const input = screen.getByLabelText('user-input') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /submit/i });

   //👉 ইনপুটে Lipon Roy টাইপ করা এবং বাটনে ক্লিক করার মতো আচরণ সিমুলেট করা হয়েছে।

    fireEvent.change(input, { target: { value: 'Lipon Roy' } });
    fireEvent.click(submitButton);
    // 👉 data-testid="result" এলিমেন্টে Lipon Roy লেখা আছে কি না, তা চেক করা হচ্ছে।
    expect(screen.getByTestId('result')).toHaveTextContent('Lipon Roy');

  });
});

// All comment is here ...
// render, screen, fireEvent
// 👉 এগুলো @testing-library/react থেকে এসেছে। এগুলোর কাজ:

// render: কম্পোনেন্টকে ভার্চুয়াল DOM-এ রেন্ডার করে।

// screen: ডকুমেন্টের মধ্যে DOM এলিমেন্ট খুঁজে বের করতে সাহায্য করে।

// fireEvent: ইউজারের ইন্টারঅ্যাকশন (যেমন: change, click) সিমুলেট করে।

// SimpleForm: আমাদের টেস্ট করার কম্পোনেন্ট।


// 🔸 describe()
// 👉 এটা একটি টেস্ট স্যুট। এর মধ্যে থাকা সব টেস্ট SimpleForm Component সম্পর্কিত।

// 🔸 beforeEach()
// 👉 প্রতিটি টেস্টের আগে SimpleForm কম্পোনেন্টটি একবার রেন্ডার করে দেবে।

// 🔸 it()
// 👉 এটি একটি টেস্ট কেস।

// 🔸 expect().toBeInTheDocument()
// 👉 চেক করে DOM-এ ইনপুট এবং বাটন আছে কিনা।

// বিস্তারিত:
// getByPlaceholderText(/type something/i)
// 👉 placeholder="Type something..." ইনপুট খুঁজে বের করে।

// getByRole('button', { name: /submit/i })
// 👉 Submit নামের বাটন খুঁজে বের করে।

// render()	কম্পোনেন্টকে ভার্চুয়াল DOM-এ রেন্ডার করে
// screen.getBy...()	DOM থেকে ইনপুট, বাটন, বা রেজাল্ট এলিমেন্ট খোঁজে
// fireEvent.change()	ইউজারের ইনপুট টাইপ করার আচরণ সিমুলেট করে
// fireEvent.click()	বাটনে ক্লিক করার সিমুলেশন করে
// expect(...).toBeInTheDocument()	DOM-এ উপাদান আছে কি না পরীক্ষা করে
// expect(...).toHaveTextContent()	DOM-এর মধ্যে নির্দিষ্ট টেক্সট আছে কি না চেক করে

