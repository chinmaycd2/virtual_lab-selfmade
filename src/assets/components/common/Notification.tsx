// NotificationPage.js
import React from 'react';

const Notification = () => {
  const notifications = [
    {
      type: 'success',
      title: 'Success!',
      message: 'Your settings have been saved successfully.',
    },
    {
      type: 'warning',
      title: 'Warning!',
      message: 'Your subscription is about to expire.',
    },
    {
      type: 'error',
      title: 'Error!',
      message: 'Something went wrong. Please try again.',
    },
    {
      type: 'warning',
      title: 'Warning!',
      message: 'Your subscription is about to expire.',
    },
    {
      type: 'error',
      title: 'Error!',
      message: 'Something went wrong. Please try again.',
    }
  ];

  const getNotificationClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'error':
        return 'bg-red-100 border-red-500 text-red-700';
      default:
        return '';
    }
  };

  const icons = {
    success: 'M13 16h-1v-4h1m0 0V7m-2 5h1M7 16h10v2H7v-2z',
    warning: 'M13 16h-1v-4h1m0 0V7m-2 5h1M7 16h10v2H7v-2z',
    error: 'M11 7h1v4h-1zm0 5h1v2h-1zm-2-3h1V7h-1zm0 5h1v-2h-1zm5 2h1v-4h-1zM6 17h12v2H6z'
  };

  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white  h-[360px] overflow-y-auto scrollbar-hide">
        {notifications.map((notif, index) => (
          <div key={index} className={`bg-${getNotificationClasses(notif.type)} border-l-4 border-r-4  p-4 mb-4 rounded-lg`}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[notif.type]} />
              </svg>
              <div>
                <p className="font-medium">{notif.title}</p>
                <p>{notif.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notification
