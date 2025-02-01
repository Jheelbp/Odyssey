import React, { useState } from 'react';
import { X, Calendar, Clock, CreditCard, MapPin, Star, Info, Users, Shield } from 'lucide-react';
import Swal from 'sweetalert2';
export function BookingModal({ facility, onClose }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);
  const [paymentStep, setPaymentStep] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const totalAmount = facility.pricePerHour * duration;

  const handlePayment = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Payment Successful!',
      text: `Your booking at ${facility.name} has been confirmed for ${selectedDate} at ${selectedTime}`,
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#7C3AED',
    }).then(() => {
      onClose();
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-xl">
        <div className="relative">
          <img 
            src={facility.imageUrl} 
            alt={facility.name} 
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h2 className="text-2xl font-bold text-white mb-2">{facility.name}</h2>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span className="text-sm">{facility.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400" />
                <span className="text-sm">{facility.rating}/5</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!paymentStep ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex text-purple-600 font-bold text-xl mb-2 items-center gap-2">
                    <Calendar className="text-purple-600" size={16} />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex text-purple-600 font-bold text-xl mb-2 items-center gap-2">
                    <Clock className="text-purple-600" size={16} />
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="" className=''>Select a time</option>
                    {availableTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="flex text-purple-600 font-bold text-xl mb-2 items-center gap-2">
                  <Users className="text-purple-600" size={16} />
                  Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full p-2 border bg-black text-purple-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  {[1, 2, 3, 4].map(hours => (
                    <option key={hours} value={hours}>{hours} hour{hours > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-800 border rounded-lg p-4 flex items-start gap-2">
                <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                <p className="text-sm text-blue-700">
                  Bookings can be cancelled up to 24 hours before the scheduled time for a full refund.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="font-bold text-xl mb-3 flex text-purple-600 items-center gap-2">
                  <Info size={16} className="text-purple-600" />
                  Booking Summary
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className='text-white'>Price per hour</span>
                    <span className="font-medium text-lg text-white">${facility.pricePerHour}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-lg text-white">Duration</span>
                    <span className="font-medium text-lg text-white">{duration} hour{duration > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t text-base">
                    <span className="font-medium text-lg text-white">Total Amount</span>
                    <span className="font-bold text-purple-600">${totalAmount}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield size={16} />
                <span>Your booking is protected by our satisfaction guarantee</span>
              </div>

              <button
                onClick={() => setPaymentStep(true)}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
              >
                Continue to Payment
              </button>
            </div>
          ) : (
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="flex justify-center gap-4 mb-6">
                <button className="p-4 border rounded-lg bg-gray-50 transition-colors">
                  <img src="images/paypal.png" alt="PayPal" className="h-14" />
                </button>
                <button className="p-4 border rounded-lg bg-gray-50 transition-colors">
                  <img src="/images/apple.png" alt="Apple Pay" className="h-14" />
                </button>
                <button className="p-4 border rounded-lg bg-gray-50 transition-colors">
                  <img src="/images/gpay.png" alt="Google Pay" className="h-14" />
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <hr className="w-full border-gray-200" />
                <span className="absolute bg-white px-4 text-sm text-gray-500">or pay with card</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-11"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Security Code</label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Pay ${totalAmount}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield size={16} />
                <span>Payments are secured and encrypted</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}