
(function () {
  'use strict';

  const SEED_PASSENGERS = [
    { id: 'P001', name: 'Aman Kumar', phone: '9876543210', email: 'aman@email.com', age: 22, gender: 'Male' },
    { id: 'P002', name: 'Priya Sharma', phone: '9876543211', email: 'priya@email.com', age: 25, gender: 'Female' },
    { id: 'P003', name: 'Rahul Verma', phone: '9876543212', email: 'rahul@email.com', age: 30, gender: 'Male' },
    { id: 'P004', name: 'Sneha Patel', phone: '9876543213', email: 'sneha@email.com', age: 28, gender: 'Female' },
    { id: 'P005', name: 'Vikram Singh', phone: '9876543214', email: 'vikram@email.com', age: 35, gender: 'Male' },
    { id: 'P006', name: 'Anita Desai', phone: '9876543215', email: 'anita@email.com', age: 40, gender: 'Female' },
    { id: 'P007', name: 'Karan Mehta', phone: '9876543216', email: 'karan@email.com', age: 19, gender: 'Male' },
    { id: 'P008', name: 'Divya Nair', phone: '9876543217', email: 'divya@email.com', age: 26, gender: 'Female' },
    { id: 'P009', name: 'Suresh Reddy', phone: '9876543218', email: 'suresh@email.com', age: 45, gender: 'Male' },
    { id: 'P010', name: 'Meera Joshi', phone: '9876543219', email: 'meera@email.com', age: 32, gender: 'Female' },
    { id: 'P011', name: 'Arjun Das', phone: '9876543220', email: 'arjun@email.com', age: 27, gender: 'Male' },
    { id: 'P012', name: 'Pooja Gupta', phone: '9876543221', email: 'pooja@email.com', age: 23, gender: 'Female' },
    { id: 'P013', name: 'Ravi Shankar', phone: '9876543222', email: 'ravi@email.com', age: 50, gender: 'Male' },
    { id: 'P014', name: 'Nisha Yadav', phone: '9876543223', email: 'nisha@email.com', age: 29, gender: 'Female' },
    { id: 'P015', name: 'Manish Tiwari', phone: '9876543224', email: 'manish@email.com', age: 33, gender: 'Male' },
  ];

  const SEED_BUSES = [
    { id: 'B001', busNumber: 'DL-01-AB-1234', type: 'AC Sleeper', route: 'Delhi → Jaipur', from: 'Delhi', to: 'Jaipur', departure: '06:00', arrival: '12:00', seats: 40, fare: 850 },
    { id: 'B002', busNumber: 'DL-02-CD-5678', type: 'Non-AC', route: 'Delhi → Agra', from: 'Delhi', to: 'Agra', departure: '07:30', arrival: '11:30', seats: 50, fare: 450 },
    { id: 'B003', busNumber: 'MH-03-EF-9012', type: 'AC Seater', route: 'Mumbai → Pune', from: 'Mumbai', to: 'Pune', departure: '08:00', arrival: '12:00', seats: 45, fare: 600 },
    { id: 'B004', busNumber: 'KA-04-GH-3456', type: 'Volvo AC', route: 'Bangalore → Chennai', from: 'Bangalore', to: 'Chennai', departure: '22:00', arrival: '05:00', seats: 36, fare: 1200 },
    { id: 'B005', busNumber: 'TN-05-IJ-7890', type: 'Non-AC', route: 'Chennai → Madurai', from: 'Chennai', to: 'Madurai', departure: '21:00', arrival: '06:00', seats: 50, fare: 550 },
    { id: 'B006', busNumber: 'UP-06-KL-2345', type: 'AC Sleeper', route: 'Lucknow → Varanasi', from: 'Lucknow', to: 'Varanasi', departure: '20:00', arrival: '04:00', seats: 38, fare: 900 },
    { id: 'B007', busNumber: 'RJ-07-MN-6789', type: 'AC Seater', route: 'Jaipur → Udaipur', from: 'Jaipur', to: 'Udaipur', departure: '09:00', arrival: '16:00', seats: 44, fare: 750 },
    { id: 'B008', busNumber: 'GJ-08-OP-0123', type: 'Volvo AC', route: 'Ahmedabad → Mumbai', from: 'Ahmedabad', to: 'Mumbai', departure: '23:00', arrival: '07:00', seats: 36, fare: 1100 },
  ];

  const SEED_BOOKINGS = [
    { id: 'BK001', passengerId: 'P001', busId: 'B001', travelDate: '2026-06-20', seatNumber: 12, status: 'Confirmed', bookingDate: '2026-06-18' },
    { id: 'BK002', passengerId: 'P002', busId: 'B003', travelDate: '2026-06-21', seatNumber: 5, status: 'Confirmed', bookingDate: '2026-06-18' },
    { id: 'BK003', passengerId: 'P003', busId: 'B004', travelDate: '2026-06-22', seatNumber: 18, status: 'Pending', bookingDate: '2026-06-18' },
    { id: 'BK004', passengerId: 'P004', busId: 'B002', travelDate: '2026-06-20', seatNumber: 22, status: 'Confirmed', bookingDate: '2026-06-17' },
    { id: 'BK005', passengerId: 'P005', busId: 'B005', travelDate: '2026-06-23', seatNumber: 33, status: 'Cancelled', bookingDate: '2026-06-17' },
    { id: 'BK006', passengerId: 'P006', busId: 'B006', travelDate: '2026-06-24', seatNumber: 8, status: 'Confirmed', bookingDate: '2026-06-17' },
    { id: 'BK007', passengerId: 'P007', busId: 'B007', travelDate: '2026-06-25', seatNumber: 15, status: 'Pending', bookingDate: '2026-06-16' },
    { id: 'BK008', passengerId: 'P008', busId: 'B008', travelDate: '2026-06-22', seatNumber: 2, status: 'Confirmed', bookingDate: '2026-06-16' },
    { id: 'BK009', passengerId: 'P009', busId: 'B001', travelDate: '2026-06-26', seatNumber: 28, status: 'Confirmed', bookingDate: '2026-06-15' },
    { id: 'BK010', passengerId: 'P010', busId: 'B004', travelDate: '2026-06-27', seatNumber: 10, status: 'Pending', bookingDate: '2026-06-15' },
    { id: 'BK011', passengerId: 'P011', busId: 'B002', travelDate: '2026-06-21', seatNumber: 40, status: 'Confirmed', bookingDate: '2026-06-14' },
    { id: 'BK012', passengerId: 'P012', busId: 'B003', travelDate: '2026-06-28', seatNumber: 19, status: 'Cancelled', bookingDate: '2026-06-14' },
  ];

  const Store = {
    _get(key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return null;
      }
    },
    _set(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    init() {
      if (!this._get('bus_passengers')) this._set('bus_passengers', SEED_PASSENGERS);
      if (!this._get('bus_buses')) this._set('bus_buses', SEED_BUSES);
      if (!this._get('bus_bookings')) this._set('bus_bookings', SEED_BOOKINGS);
    },
    getPassengers() { return this._get('bus_passengers') || []; },
    setPassengers(data) { this._set('bus_passengers', data); },
    getBuses() { return this._get('bus_buses') || []; },
    setBuses(data) { this._set('bus_buses', data); },
    getBookings() { return this._get('bus_bookings') || []; },
    setBookings(data) { this._set('bus_bookings', data); },
  };

  // ========== UTILITIES ==========
  function $(selector) { return document.querySelector(selector); }
  function $$(selector) { return document.querySelectorAll(selector); }

  function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  function generateId(prefix, items) {
    const nums = items.map(i => parseInt(i.id.replace(prefix, ''), 10)).filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return prefix + String(next).padStart(3, '0');
  }

  function showToast(message, type = 'success') {
    const container = $('#toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ========== NAVIGATION ==========
  const pageTitles = {
    dashboard: 'Dashboard',
    passengers: 'Passenger Management',
    buses: 'Bus Management',
    bookings: 'Booking Management',
    tickets: 'Ticket Details',
  };

  function navigateTo(page) {
    $$('.page').forEach(p => p.classList.remove('active'));
    $$('.nav-link').forEach(l => l.classList.remove('active'));
    const target = $(`#page-${page}`);
    const link = $(`.nav-link[data-page="${page}"]`);
    if (target) target.classList.add('active');
    if (link) link.classList.add('active');
    $('#pageTitle').textContent = pageTitles[page] || 'Dashboard';

    // Close sidebar on mobile
    $('#sidebar').classList.remove('open');
    const backdrop = $('.sidebar-backdrop');
    if (backdrop) backdrop.classList.remove('show');

    // Render page
    switch (page) {
      case 'dashboard': renderDashboard(); break;
      case 'passengers': renderPassengers(); break;
      case 'buses': renderBuses(); break;
      case 'bookings': renderBookings(); break;
      case 'tickets': break;
    }
  }

  // ========== MODAL ==========
  function openModal(title, bodyHTML) {
    $('#modalTitle').textContent = title;
    $('#modalBody').innerHTML = bodyHTML;
    $('#modalOverlay').classList.add('open');
  }

  function closeModal() {
    $('#modalOverlay').classList.remove('open');
  }

  // ========== PAGINATION HELPER ==========
  const PAGE_SIZE = 8;

  function paginate(items, page) {
    const start = (page - 1) * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }

  function renderPagination(containerId, totalItems, currentPage, onPageChange) {
    const container = $(`#${containerId}`);
    if (!container) return;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);
    if (totalPages <= 1) { container.innerHTML = ''; return; }

    let html = `<button ${currentPage === 1 ? 'disabled' : ''} data-p="${currentPage - 1}">‹</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="${i === currentPage ? 'active' : ''}" data-p="${i}">${i}</button>`;
    }
    html += `<span class="page-info">${currentPage} / ${totalPages}</span>`;
    html += `<button ${currentPage === totalPages ? 'disabled' : ''} data-p="${currentPage + 1}">›</button>`;
    container.innerHTML = html;

    container.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.dataset.p, 10);
        if (p >= 1 && p <= totalPages) onPageChange(p);
      });
    });
  }

  // ========== DASHBOARD ==========
  function renderDashboard() {
    const passengers = Store.getPassengers();
    const buses = Store.getBuses();
    const bookings = Store.getBookings();

    // Stats
    $('#statPassengers').textContent = passengers.length;
    $('#statBuses').textContent = buses.length;
    $('#statBookings').textContent = bookings.length;

    const confirmedBookings = bookings.filter(b => b.status === 'Confirmed');
    const totalRevenue = confirmedBookings.reduce((sum, bk) => {
      const bus = buses.find(b => b.id === bk.busId);
      return sum + (bus ? bus.fare : 0);
    }, 0);
    $('#statRevenue').textContent = '₹' + totalRevenue.toLocaleString('en-IN');


    const recent = bookings.slice().sort((a, b) => b.bookingDate.localeCompare(a.bookingDate)).slice(0, 5);
    const tbody = $('#recentBookingsBody');
    if (recent.length === 0) {
      tbody.innerHTML = '<tr class="no-data"><td colspan="5">No bookings yet.</td></tr>';
    } else {
      tbody.innerHTML = recent.map(bk => {
        const passenger = passengers.find(p => p.id === bk.passengerId);
        const bus = buses.find(b => b.id === bk.busId);
        return `<tr>
          <td>${bk.id}</td>
          <td>${passenger ? passenger.name : '—'}</td>
          <td>${bus ? bus.route : '—'}</td>
          <td>${formatDate(bk.travelDate)}</td>
          <td><span class="badge badge-${bk.status.toLowerCase()}">${bk.status}</span></td>
        </tr>`;
      }).join('');
    }

    // Fleet Summary
    const fleetContainer = $('#fleetSummary');
    if (buses.length === 0) {
      fleetContainer.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;padding:8px 0;">No buses registered.</p>';
    } else {
      fleetContainer.innerHTML = buses.slice(0, 6).map(bus => `
        <div class="fleet-item">
          <div class="fleet-info">
            <span class="fleet-bus-no">${bus.busNumber}</span>
            <span class="fleet-route">${bus.route}</span>
          </div>
          <span class="fleet-type">${bus.type}</span>
        </div>
      `).join('');
    }
  }

  // ========== PASSENGERS ==========
  let passengersPage = 1;

  function renderPassengers() {
    const query = ($('#passengerSearch').value || '').toLowerCase();
    let passengers = Store.getPassengers();
    if (query) {
      passengers = passengers.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.id.toLowerCase().includes(query) ||
        p.phone.includes(query) ||
        p.email.toLowerCase().includes(query)
      );
    }
    const paged = paginate(passengers, passengersPage);
    const tbody = $('#passengersTableBody');
    if (paged.length === 0) {
      tbody.innerHTML = '<tr class="no-data"><td colspan="7">No passengers found.</td></tr>';
    } else {
      tbody.innerHTML = paged.map(p => `<tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.phone}</td>
        <td>${p.email}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>
          <div class="action-btns">
            <button class="btn btn-sm btn-secondary" onclick="App.editPassenger('${p.id}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="App.deletePassenger('${p.id}')">Delete</button>
          </div>
        </td>
      </tr>`).join('');
    }
    renderPagination('passengersPagination', passengers.length, passengersPage, (p) => {
      passengersPage = p;
      renderPassengers();
    });
  }

  function openPassengerForm(passenger) {
    const isEdit = !!passenger;
    const title = isEdit ? 'Edit Passenger' : 'Add Passenger';
    const html = `
      <form id="passengerForm">
        <div class="form-group">
          <label for="pName">Full Name</label>
          <input type="text" id="pName" value="${isEdit ? passenger.name : ''}" placeholder="Enter full name" />
          <div class="form-error" id="pNameError">Name is required.</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="pPhone">Phone</label>
            <input type="text" id="pPhone" value="${isEdit ? passenger.phone : ''}" placeholder="10-digit number" maxlength="10" />
            <div class="form-error" id="pPhoneError">Valid 10-digit phone required.</div>
          </div>
          <div class="form-group">
            <label for="pEmail">Email</label>
            <input type="email" id="pEmail" value="${isEdit ? passenger.email : ''}" placeholder="email@example.com" />
            <div class="form-error" id="pEmailError">Valid email required.</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="pAge">Age</label>
            <input type="number" id="pAge" value="${isEdit ? passenger.age : ''}" placeholder="Age" min="1" max="120" />
            <div class="form-error" id="pAgeError">Valid age required.</div>
          </div>
          <div class="form-group">
            <label for="pGender">Gender</label>
            <select id="pGender">
              <option value="">Select</option>
              <option value="Male" ${isEdit && passenger.gender === 'Male' ? 'selected' : ''}>Male</option>
              <option value="Female" ${isEdit && passenger.gender === 'Female' ? 'selected' : ''}>Female</option>
              <option value="Other" ${isEdit && passenger.gender === 'Other' ? 'selected' : ''}>Other</option>
            </select>
            <div class="form-error" id="pGenderError">Gender is required.</div>
          </div>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'} Passenger</button>
        </div>
      </form>
    `;
    openModal(title, html);

    $('#passengerForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        name: $('#pName').value.trim(),
        phone: $('#pPhone').value.trim(),
        email: $('#pEmail').value.trim(),
        age: parseInt($('#pAge').value, 10),
        gender: $('#pGender').value,
      };

      // Validate
      let valid = true;
      if (!data.name) { $('#pName').classList.add('error'); $('#pNameError').classList.add('show'); valid = false; } else { $('#pName').classList.remove('error'); $('#pNameError').classList.remove('show'); }
      if (!/^\d{10}$/.test(data.phone)) { $('#pPhone').classList.add('error'); $('#pPhoneError').classList.add('show'); valid = false; } else { $('#pPhone').classList.remove('error'); $('#pPhoneError').classList.remove('show'); }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { $('#pEmail').classList.add('error'); $('#pEmailError').classList.add('show'); valid = false; } else { $('#pEmail').classList.remove('error'); $('#pEmailError').classList.remove('show'); }
      if (isNaN(data.age) || data.age < 1 || data.age > 120) { $('#pAge').classList.add('error'); $('#pAgeError').classList.add('show'); valid = false; } else { $('#pAge').classList.remove('error'); $('#pAgeError').classList.remove('show'); }
      if (!data.gender) { $('#pGender').classList.add('error'); $('#pGenderError').classList.add('show'); valid = false; } else { $('#pGender').classList.remove('error'); $('#pGenderError').classList.remove('show'); }

      if (!valid) return;

      const passengers = Store.getPassengers();
      if (isEdit) {
        const idx = passengers.findIndex(p => p.id === passenger.id);
        if (idx !== -1) { passengers[idx] = { ...passengers[idx], ...data }; }
        showToast('Passenger updated successfully.');
      } else {
        data.id = generateId('P', passengers);
        passengers.push(data);
        showToast('Passenger added successfully.');
      }
      Store.setPassengers(passengers);
      closeModal();
      renderPassengers();
    });
  }

  function deletePassenger(id) {
    if (!confirm('Are you sure you want to delete this passenger?')) return;
    const passengers = Store.getPassengers().filter(p => p.id !== id);
    Store.setPassengers(passengers);
    showToast('Passenger deleted.', 'warning');
    renderPassengers();
  }

  // ========== BUSES ==========
  let busesPage = 1;

  function renderBuses() {
    const query = ($('#busSearch').value || '').toLowerCase();
    let buses = Store.getBuses();
    if (query) {
      buses = buses.filter(b =>
        b.busNumber.toLowerCase().includes(query) ||
        b.route.toLowerCase().includes(query) ||
        b.type.toLowerCase().includes(query)
      );
    }
    const paged = paginate(buses, busesPage);
    const tbody = $('#busesTableBody');
    if (paged.length === 0) {
      tbody.innerHTML = '<tr class="no-data"><td colspan="8">No buses found.</td></tr>';
    } else {
      tbody.innerHTML = paged.map(b => `<tr>
        <td>${b.busNumber}</td>
        <td>${b.type}</td>
        <td>${b.route}</td>
        <td>${b.departure}</td>
        <td>${b.arrival}</td>
        <td>${b.seats}</td>
        <td>₹${b.fare.toLocaleString('en-IN')}</td>
        <td>
          <div class="action-btns">
            <button class="btn btn-sm btn-secondary" onclick="App.editBus('${b.id}')">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="App.deleteBus('${b.id}')">Delete</button>
          </div>
        </td>
      </tr>`).join('');
    }
    renderPagination('busesPagination', buses.length, busesPage, (p) => {
      busesPage = p;
      renderBuses();
    });
  }

  function openBusForm(bus) {
    const isEdit = !!bus;
    const title = isEdit ? 'Edit Bus' : 'Add Bus';
    const html = `
      <form id="busForm">
        <div class="form-row">
          <div class="form-group">
            <label for="bNumber">Bus Number</label>
            <input type="text" id="bNumber" value="${isEdit ? bus.busNumber : ''}" placeholder="e.g. DL-01-AB-1234" />
            <div class="form-error" id="bNumberError">Bus number is required.</div>
          </div>
          <div class="form-group">
            <label for="bType">Type</label>
            <select id="bType">
              <option value="">Select Type</option>
              <option value="Non-AC" ${isEdit && bus.type === 'Non-AC' ? 'selected' : ''}>Non-AC</option>
              <option value="AC Seater" ${isEdit && bus.type === 'AC Seater' ? 'selected' : ''}>AC Seater</option>
              <option value="AC Sleeper" ${isEdit && bus.type === 'AC Sleeper' ? 'selected' : ''}>AC Sleeper</option>
              <option value="Volvo AC" ${isEdit && bus.type === 'Volvo AC' ? 'selected' : ''}>Volvo AC</option>
            </select>
            <div class="form-error" id="bTypeError">Type is required.</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="bFrom">From</label>
            <input type="text" id="bFrom" value="${isEdit ? bus.from : ''}" placeholder="Origin city" />
            <div class="form-error" id="bFromError">Origin city is required.</div>
          </div>
          <div class="form-group">
            <label for="bTo">To</label>
            <input type="text" id="bTo" value="${isEdit ? bus.to : ''}" placeholder="Destination city" />
            <div class="form-error" id="bToError">Destination city is required.</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="bDeparture">Departure Time</label>
            <input type="time" id="bDeparture" value="${isEdit ? bus.departure : ''}" />
            <div class="form-error" id="bDepartureError">Departure time is required.</div>
          </div>
          <div class="form-group">
            <label for="bArrival">Arrival Time</label>
            <input type="time" id="bArrival" value="${isEdit ? bus.arrival : ''}" />
            <div class="form-error" id="bArrivalError">Arrival time is required.</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="bSeats">Total Seats</label>
            <input type="number" id="bSeats" value="${isEdit ? bus.seats : ''}" placeholder="e.g. 40" min="1" />
            <div class="form-error" id="bSeatsError">Valid seat count required.</div>
          </div>
          <div class="form-group">
            <label for="bFare">Fare (₹)</label>
            <input type="number" id="bFare" value="${isEdit ? bus.fare : ''}" placeholder="e.g. 850" min="1" />
            <div class="form-error" id="bFareError">Valid fare required.</div>
          </div>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Update' : 'Add'} Bus</button>
        </div>
      </form>
    `;
    openModal(title, html);

    $('#busForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        busNumber: $('#bNumber').value.trim(),
        type: $('#bType').value,
        from: $('#bFrom').value.trim(),
        to: $('#bTo').value.trim(),
        departure: $('#bDeparture').value,
        arrival: $('#bArrival').value,
        seats: parseInt($('#bSeats').value, 10),
        fare: parseInt($('#bFare').value, 10),
      };
      data.route = data.from && data.to ? `${data.from} → ${data.to}` : '';

      // Validate
      let valid = true;
      const checks = [
        ['bNumber', 'bNumberError', !data.busNumber],
        ['bType', 'bTypeError', !data.type],
        ['bFrom', 'bFromError', !data.from],
        ['bTo', 'bToError', !data.to],
        ['bDeparture', 'bDepartureError', !data.departure],
        ['bArrival', 'bArrivalError', !data.arrival],
        ['bSeats', 'bSeatsError', isNaN(data.seats) || data.seats < 1],
        ['bFare', 'bFareError', isNaN(data.fare) || data.fare < 1],
      ];
      checks.forEach(([field, err, isBad]) => {
        if (isBad) { $(`#${field}`).classList.add('error'); $(`#${err}`).classList.add('show'); valid = false; }
        else { $(`#${field}`).classList.remove('error'); $(`#${err}`).classList.remove('show'); }
      });
      if (!valid) return;

      const buses = Store.getBuses();
      if (isEdit) {
        const idx = buses.findIndex(b => b.id === bus.id);
        if (idx !== -1) { buses[idx] = { ...buses[idx], ...data }; }
        showToast('Bus updated successfully.');
      } else {
        data.id = generateId('B', buses);
        buses.push(data);
        showToast('Bus added successfully.');
      }
      Store.setBuses(buses);
      closeModal();
      renderBuses();
    });
  }

  function deleteBus(id) {
    if (!confirm('Are you sure you want to delete this bus?')) return;
    const buses = Store.getBuses().filter(b => b.id !== id);
    Store.setBuses(buses);
    showToast('Bus deleted.', 'warning');
    renderBuses();
  }

  // ========== BOOKINGS ==========
  let bookingsPage = 1;

  function renderBookings() {
    const query = ($('#bookingSearch').value || '').toLowerCase();
    const statusFilter = $('#bookingStatusFilter').value;
    const passengers = Store.getPassengers();
    const buses = Store.getBuses();
    let bookings = Store.getBookings();

    if (query) {
      bookings = bookings.filter(bk => {
        const passenger = passengers.find(p => p.id === bk.passengerId);
        const bus = buses.find(b => b.id === bk.busId);
        return bk.id.toLowerCase().includes(query) ||
          (passenger && passenger.name.toLowerCase().includes(query)) ||
          (bus && bus.busNumber.toLowerCase().includes(query));
      });
    }
    if (statusFilter) {
      bookings = bookings.filter(bk => bk.status === statusFilter);
    }

    const paged = paginate(bookings, bookingsPage);
    const tbody = $('#bookingsTableBody');
    if (paged.length === 0) {
      tbody.innerHTML = '<tr class="no-data"><td colspan="9">No bookings found.</td></tr>';
    } else {
      tbody.innerHTML = paged.map(bk => {
        const passenger = passengers.find(p => p.id === bk.passengerId);
        const bus = buses.find(b => b.id === bk.busId);
        return `<tr>
          <td>${bk.id}</td>
          <td>${passenger ? passenger.name : '—'}</td>
          <td>${bus ? bus.busNumber : '—'}</td>
          <td>${bus ? bus.route : '—'}</td>
          <td>${formatDate(bk.travelDate)}</td>
          <td>${bk.seatNumber}</td>
          <td>₹${bus ? bus.fare.toLocaleString('en-IN') : '—'}</td>
          <td><span class="badge badge-${bk.status.toLowerCase()}">${bk.status}</span></td>
          <td>
            <div class="action-btns">
              ${bk.status === 'Pending' ? `<button class="btn btn-sm btn-success" onclick="App.confirmBooking('${bk.id}')">Confirm</button>` : ''}
              ${bk.status !== 'Cancelled' ? `<button class="btn btn-sm btn-danger" onclick="App.cancelBooking('${bk.id}')">Cancel</button>` : ''}
              <button class="btn btn-sm btn-secondary" onclick="App.viewTicket('${bk.id}')">Ticket</button>
            </div>
          </td>
        </tr>`;
      }).join('');
    }
    renderPagination('bookingsPagination', bookings.length, bookingsPage, (p) => {
      bookingsPage = p;
      renderBookings();
    });
  }

  function openBookingForm() {
    const passengers = Store.getPassengers();
    const buses = Store.getBuses();

    if (passengers.length === 0 || buses.length === 0) {
      showToast('Please add passengers and buses first.', 'error');
      return;
    }

    const passengerOptions = passengers.map(p => `<option value="${p.id}">${p.name} (${p.id})</option>`).join('');
    const busOptions = buses.map(b => `<option value="${b.id}">${b.busNumber} — ${b.route} (₹${b.fare})</option>`).join('');

    const html = `
      <form id="bookingForm">
        <div class="form-group">
          <label for="bkPassenger">Passenger</label>
          <select id="bkPassenger">
            <option value="">Select Passenger</option>
            ${passengerOptions}
          </select>
          <div class="form-error" id="bkPassengerError">Passenger is required.</div>
        </div>
        <div class="form-group">
          <label for="bkBus">Bus</label>
          <select id="bkBus">
            <option value="">Select Bus</option>
            ${busOptions}
          </select>
          <div class="form-error" id="bkBusError">Bus is required.</div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="bkDate">Travel Date</label>
            <input type="date" id="bkDate" />
            <div class="form-error" id="bkDateError">Travel date is required.</div>
          </div>
          <div class="form-group">
            <label for="bkSeat">Seat Number</label>
            <input type="number" id="bkSeat" placeholder="e.g. 12" min="1" />
            <div class="form-error" id="bkSeatError">Valid seat number required.</div>
          </div>
        </div>
        <div class="form-group">
          <label for="bkStatus">Status</label>
          <select id="bkStatus">
            <option value="Confirmed">Confirmed</option>
            <option value="Pending" selected>Pending</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="App.closeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Create Booking</button>
        </div>
      </form>
    `;
    openModal('New Booking', html);

    $('#bookingForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        passengerId: $('#bkPassenger').value,
        busId: $('#bkBus').value,
        travelDate: $('#bkDate').value,
        seatNumber: parseInt($('#bkSeat').value, 10),
        status: $('#bkStatus').value,
        bookingDate: new Date().toISOString().slice(0, 10),
      };

      let valid = true;
      if (!data.passengerId) { $('#bkPassenger').classList.add('error'); $('#bkPassengerError').classList.add('show'); valid = false; } else { $('#bkPassenger').classList.remove('error'); $('#bkPassengerError').classList.remove('show'); }
      if (!data.busId) { $('#bkBus').classList.add('error'); $('#bkBusError').classList.add('show'); valid = false; } else { $('#bkBus').classList.remove('error'); $('#bkBusError').classList.remove('show'); }
      if (!data.travelDate) { $('#bkDate').classList.add('error'); $('#bkDateError').classList.add('show'); valid = false; } else { $('#bkDate').classList.remove('error'); $('#bkDateError').classList.remove('show'); }

      const bus = buses.find(b => b.id === data.busId);
      if (isNaN(data.seatNumber) || data.seatNumber < 1 || (bus && data.seatNumber > bus.seats)) {
        $('#bkSeat').classList.add('error'); $('#bkSeatError').classList.add('show'); valid = false;
      } else { $('#bkSeat').classList.remove('error'); $('#bkSeatError').classList.remove('show'); }

      if (!valid) return;

      const bookings = Store.getBookings();
      data.id = generateId('BK', bookings);
      bookings.push(data);
      Store.setBookings(bookings);
      closeModal();
      showToast('Booking created successfully.');
      renderBookings();
    });
  }

  function confirmBooking(id) {
    const bookings = Store.getBookings();
    const bk = bookings.find(b => b.id === id);
    if (bk) { bk.status = 'Confirmed'; Store.setBookings(bookings); showToast('Booking confirmed.'); renderBookings(); }
  }

  function cancelBooking(id) {
    if (!confirm('Cancel this booking?')) return;
    const bookings = Store.getBookings();
    const bk = bookings.find(b => b.id === id);
    if (bk) { bk.status = 'Cancelled'; Store.setBookings(bookings); showToast('Booking cancelled.', 'warning'); renderBookings(); }
  }

  // ========== TICKETS ==========
  function searchTicket() {
    const query = ($('#ticketSearch').value || '').trim().toUpperCase();
    const container = $('#ticketResult');
    if (!query) {
      container.innerHTML = `<div class="empty-state"><span class="empty-icon">🎫</span><h3>Search for a Ticket</h3><p>Enter a Booking ID above to view the ticket details.</p></div>`;
      return;
    }

    const bookings = Store.getBookings();
    const booking = bookings.find(b => b.id === query);

    if (!booking) {
      container.innerHTML = `<div class="empty-state"><span class="empty-icon">❌</span><h3>Ticket Not Found</h3><p>No booking found with ID "${query}". Please check and try again.</p></div>`;
      return;
    }

    const passenger = Store.getPassengers().find(p => p.id === booking.passengerId);
    const bus = Store.getBuses().find(b => b.id === booking.busId);

    container.innerHTML = `
      <div class="ticket-card">
        <div class="ticket-header">
          <h3>🚌 BusReserve</h3>
          <span class="ticket-id">${booking.id}</span>
        </div>
        <div class="ticket-body">
          <div class="ticket-route">
            <div class="ticket-city">
              <div class="city-name">${bus ? bus.from : '—'}</div>
              <div class="city-time">${bus ? bus.departure : ''}</div>
            </div>
            <span class="ticket-arrow">→ → →</span>
            <div class="ticket-city">
              <div class="city-name">${bus ? bus.to : '—'}</div>
              <div class="city-time">${bus ? bus.arrival : ''}</div>
            </div>
          </div>
          <div class="ticket-details">
            <div class="ticket-field">
              <span class="field-label">Passenger Name</span>
              <span class="field-value">${passenger ? passenger.name : '—'}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Phone</span>
              <span class="field-value">${passenger ? passenger.phone : '—'}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Bus Number</span>
              <span class="field-value">${bus ? bus.busNumber : '—'}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Bus Type</span>
              <span class="field-value">${bus ? bus.type : '—'}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Travel Date</span>
              <span class="field-value">${formatDate(booking.travelDate)}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Seat Number</span>
              <span class="field-value">${booking.seatNumber}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Fare</span>
              <span class="field-value">₹${bus ? bus.fare.toLocaleString('en-IN') : '—'}</span>
            </div>
            <div class="ticket-field">
              <span class="field-label">Booking Date</span>
              <span class="field-value">${formatDate(booking.bookingDate)}</span>
            </div>
          </div>
        </div>
        <div class="ticket-footer">
          <span class="ticket-status badge badge-${booking.status.toLowerCase()}">${booking.status}</span>
          <button class="btn btn-sm btn-secondary ticket-print" onclick="window.print()">🖨 Print Ticket</button>
        </div>
      </div>
    `;
  }

  function viewTicketFromBooking(bookingId) {
    navigateTo('tickets');
    $('#ticketSearch').value = bookingId;
    searchTicket();
  }

  // ========== INITIALIZATION ==========
  function init() {
    Store.init();

    // Set header date
    const now = new Date();
    $('#headerDate').textContent = now.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });

    // Sidebar navigation
    $$('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) navigateTo(page);
      });
    });

    // Card action links (dashboard "View All")
    $$('.card-action[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
      });
    });

    // Menu toggle for mobile
    $('#menuToggle').addEventListener('click', () => {
      const sidebar = $('#sidebar');
      sidebar.classList.toggle('open');
      let backdrop = $('.sidebar-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'sidebar-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', () => {
          sidebar.classList.remove('open');
          backdrop.classList.remove('show');
        });
      }
      backdrop.classList.toggle('show', sidebar.classList.contains('open'));
    });

    // Modal close
    $('#modalClose').addEventListener('click', closeModal);
    $('#modalOverlay').addEventListener('click', (e) => {
      if (e.target === $('#modalOverlay')) closeModal();
    });

    // Passenger events
    $('#addPassengerBtn').addEventListener('click', () => openPassengerForm(null));
    $('#passengerSearch').addEventListener('input', () => { passengersPage = 1; renderPassengers(); });

    // Bus events
    $('#addBusBtn').addEventListener('click', () => openBusForm(null));
    $('#busSearch').addEventListener('input', () => { busesPage = 1; renderBuses(); });

    // Booking events
    $('#addBookingBtn').addEventListener('click', openBookingForm);
    $('#bookingSearch').addEventListener('input', () => { bookingsPage = 1; renderBookings(); });
    $('#bookingStatusFilter').addEventListener('change', () => { bookingsPage = 1; renderBookings(); });

    // Ticket events
    $('#ticketSearchBtn').addEventListener('click', searchTicket);
    $('#ticketSearch').addEventListener('keydown', (e) => { if (e.key === 'Enter') searchTicket(); });

    // Initial render
    renderDashboard();
  }

  // ========== PUBLIC API (for inline onclick handlers) ==========
  window.App = {
    closeModal,
    editPassenger(id) {
      const passenger = Store.getPassengers().find(p => p.id === id);
      if (passenger) openPassengerForm(passenger);
    },
    deletePassenger: deletePassenger,
    editBus(id) {
      const bus = Store.getBuses().find(b => b.id === id);
      if (bus) openBusForm(bus);
    },
    deleteBus: deleteBus,
    confirmBooking: confirmBooking,
    cancelBooking: cancelBooking,
    viewTicket: viewTicketFromBooking,
  };

  
  document.addEventListener('DOMContentLoaded', init);
})();
