const loadPhone = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/phones?search=iphone'
  );
  const data = await res.json();
  // console.log(data);
  displayPhone(data.data);
};

const displayPhone = datas => {
  const container = document.getElementById('card-container');
  datas.forEach(info => {
    const card = document.createElement('div');
    card.classList = 'card bg-base-100 shadow-xl border';
    card.innerHTML = `
      <figure class="px-10 pt-10">
            <img src="${info.image}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${info.phone_name}</h2>
            <p>${info.slug}</p>
            <h2 class="text-2xl font-bold text-center">$999</h2>
            <div class="card-actions">
              <button class="btn btn-primary">Show Details</button>
            </div>
          </div>
    `;
    container.appendChild(card);
    console.log(info);
  });
};

loadPhone();
