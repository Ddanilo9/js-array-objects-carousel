// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]


//recupero dal dom il contenitore UL dove andrò ad appendere tutti gli elementi
const slidesBox = document.querySelector('.slides-wrapper');

let currentIndex = 0;
//con un ciclo ForEach mi prendo tuttele slide singole
slides.forEach((element, i) => {
	const slideLi = document.createElement('li');  
	slideLi.className = 'slide'; //add classe
	if (i === 0) slideLi.classList.add('active');
	slidesBox.appendChild(slideLi);
  
	const slideImage = document.createElement('img');  
	slideImage.src = element.url;
	slideLi.appendChild(slideImage);
  
	const slideContent = document.createElement('div');  
	slideContent.className = 'slide__content';
	slideLi.appendChild(slideContent);
  
	const slideTitle = document.createElement('h3');  
	slideTitle.className = 'slide__title';
	slideTitle.innerHTML = element.title;
	slideContent.appendChild(slideTitle);
  
	const slidePar = document.createElement('p');
	slidePar.className = 'slide__description';
	slidePar.innerHTML = element.description;
	slideContent.appendChild(slidePar);
  });
  
