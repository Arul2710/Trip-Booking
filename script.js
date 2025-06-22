// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate offer cards on scroll
    const offerCards = document.querySelectorAll('.offer-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    offerCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Book Now Button Effect
    const bookButtons = document.querySelectorAll('.btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🚀 Booking feature coming soon! Stay tuned!');
        });
    });
});

// Smooth scroll to destinations section
document.querySelectorAll('a[href="destinations.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'destinations.html';
        }, 500);
    });
});

// Animate cards on page load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.2}s forwards`;
        card.style.opacity = '0';
    });
});

// Animate cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.destination-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                observer.observe(card);
            });
            
            // Button ripple effect
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Ripple effect
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    this.appendChild(ripple);
                    
                    const x = e.clientX - e.target.getBoundingClientRect().left;
                    const y = e.clientY - e.target.getBoundingClientRect().top;
                    
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    setTimeout(() => {
                        ripple.remove();
                        // Add actual booking functionality here
                        alert('Booking system will be implemented soon!');
                    }, 1000);
                });
            });
        });

        // Button click effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Pulse animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            alert(`Booking started for: ${button.closest('.card-overlay').querySelector('h3').textContent}`);
        }, 200);
    });
});

// Simple animation for cards when page loads
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.destination-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });
        });

        // Select payment method
        function selectPayment(method) {
            document.querySelectorAll('.payment-method').forEach(item => {
                item.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
            document.getElementById('paymentMethod').value = method;
        }
        
        // Update summary with form data
        document.getElementById('bookingForm').addEventListener('input', function() {
            const checkIn = document.getElementById('checkIn').value;
            const checkOut = document.getElementById('checkOut').value;
            const adults = document.getElementById('adults').value;
            const children = document.getElementById('children').value;
            
            if(checkIn) {
                document.getElementById('summaryCheckIn').textContent = formatDate(checkIn);
            }
            
            if(checkOut) {
                document.getElementById('summaryCheckOut').textContent = formatDate(checkOut);
            }
            
            let guestsText = adults + ' Adult' + (adults > 1 ? 's' : '');
            if(children > 0) {
                guestsText += ', ' + children + ' Child' + (children > 1 ? 'ren' : '');
            }
            document.getElementById('summaryGuests').textContent = guestsText;
        });
        
        // Format date as DD/MM/YYYY
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-IN');
        }
        
        // Form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            
            // Simulate API call
            setTimeout(function() {
                alert('Booking confirmed! Thank you for choosing TravelMachi.');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Confirm Booking';
                
                // Redirect to confirmation page (in real app)
                // window.location.href = 'confirmation.html';
            }, 2000);
        });
        
        // Initialize with default values
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date();
            const nextWeek = new Date();
            nextWeek.setDate(today.getDate() + 7);
            
            document.getElementById('checkIn').valueAsDate = today;
            document.getElementById('checkOut').valueAsDate = nextWeek;
            
            // Trigger input event to update summary
            const event = new Event('input');
            document.getElementById('bookingForm').dispatchEvent(event);
        });

        // Animate cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.offer-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach((card, index) => {
                setTimeout(() => {
                    observer.observe(card);
                }, 100 * index);
            });
            
            // Filter functionality
            const filterBtns = document.querySelectorAll('.filter-btn');
            const offerCards = document.querySelectorAll('.offer-card');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const filter = btn.dataset.filter;
                    
                    // Filter cards
                    offerCards.forEach(card => {
                        if (filter === 'all' || card.dataset.category === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
           
            // Update countdowns function to include new offers
function updateCountdowns() {
    // Set end dates for each offer (extended array with 6 offers now)
    const endDates = [
    new Date().getTime() + 3 * 24 * 60 * 60 * 1000,  // Offer 1
    new Date().getTime() + 5 * 24 * 60 * 60 * 1000,  // Offer 2
    new Date().getTime() + 2 * 24 * 60 * 60 * 1000,  // Offer 3
    new Date().getTime() + 4 * 24 * 60 * 60 * 1000,  // Offer 4
    new Date().getTime() + 10 * 24 * 60 * 60 * 1000, // Offer 5
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000   // Offer 6
];
    
    endDates.forEach((endDate, index) => {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById(`days${index+1}`).textContent = days.toString().padStart(2, '0');
            document.getElementById(`hours${index+1}`).textContent = hours.toString().padStart(2, '0');
            document.getElementById(`minutes${index+1}`).textContent = minutes.toString().padStart(2, '0');
            document.getElementById(`seconds${index+1}`).textContent = seconds.toString().padStart(2, '0');
        } else {
            // Offer expired
            document.querySelectorAll(`#days${index+1}, #hours${index+1}, #minutes${index+1}, #seconds${index+1}`)
                .forEach(el => el.textContent = '00');
        }
    });
}
            // Update countdown every second
            updateCountdowns();
            setInterval(updateCountdowns, 1000);
        });


       
/*icon */
// Toggle mobile menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon between bars and times
    const icon = hamburgerBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });