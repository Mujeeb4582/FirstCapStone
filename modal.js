const speakersData = [
  {
    name: 'Yochai Benkler',
    orgnize: 'Professor at Harvard Law School',
    picture: './Imgs/20-speaker1.png',
    about:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    name: 'Kilnam Chon',
    orgnize:
      'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    picture: './Imgs/21-speaker2.png',
    about:
      "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
  },
  {
    name: 'Sohyeong Noh',
    orgnize: 'Art Center Nabi Director, CC Korea Director',
    picture: './Imgs/22-speaker3.png',
    about:
      "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
  },
  {
    name: 'Julia Reda',
    orgnize: 'Head of the Young Pirates of Europe',
    picture: './Imgs/23-speaker4.png',
    about:
      "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's copyright law in July.",
  },
  {
    name: 'Lila Tretikov',
    orgnize: 'Secretary General of the Wikimedia Foundation',
    picture: './Imgs/24-speaker5.png',
    about:
      "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
  },
  {
    name: 'Ryan Merkley',
    orgnize: 'Creative Commons CEO, Former Mozilla Foundation COO',
    picture: './Imgs/25-speaker6.png',
    about:
      'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const speaker = document.getElementById('speakers');

for (let i = 0; i < speakersData.length; i++) {
  speaker.innerHTML += `<div class="speaker">
  <img src="${speakersData[i].picture}" alt="speaker-photo">
  <div class="details">
    <h4>${speakersData[i].name}</h4>
    <h6>${speakersData[i].orgnize}</h6>
    <p>${speakersData[i].about}</p>
  </div>
</div>`;
}
