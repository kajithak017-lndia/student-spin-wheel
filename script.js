const students = [
    { roll: 1, name: "Aakash shalom" }, { roll: 2, name: "Abinaya R" }, { roll: 3, name: "Abinaya S" },
    { roll: 4, name: "Abinaya S" }, { roll: 5, name: "Ajies" }, { roll: 6, name: "Ajin Durai" },
    { roll: 7, name: "Akash" }, { roll: 8, name: "Akshaya" }, { roll: 9, name: "Alagu lakshmanan" },
    { roll: 10, name: "Ancy Infant Jemi" }, { roll: 12, name: "Anusha" }, { roll: 13, name: "Arockia Varsha" },
    { roll: 14, name: "Arockiya abisha" }, { roll: 15, name: "Ashok Kumar" }, { roll: 16, name: "Banupriya" },
    { roll: 17, name: "Bavithra" }, { roll: 18, name: "Bindhuja" }, { roll: 19, name: "Brajesh" },
    { roll: 21, name: "Tharwin" }, { roll: 22, name: "Edwin Durai" }, { roll: 23, name: "Essakiammal" },
    { roll: 24, name: "EssakiDurai" }, { roll: 25, name: "Gopala Krishnan" }, { roll: 26, name: "Hemalatha" },
    { roll: 27, name: "Hephzibha" }, { roll: 28, name: "Hirthik" }, { roll: 29, name: "Indhumathi" },
    { roll: 30, name: "Ishwarya" }, { roll: 32, name: "Kanisha" },
    { roll: 33, name: "Karthikeyan" }, { roll: 34, name: "Kaushalya" }, { roll: 35, name: "Keerthika" },
    { roll: 36, name: "Kirubakaran" }, { roll: 37, name: "Lakshmi" }, { roll: 38, name: "Lakshmi Manohari" },
    { roll: 40, name: "Linga Arasi" }, { roll: 41, name: "Madhumitha" },
    { roll: 42, name: "Mahalakshmi" }, { roll: 44, name: "Manikandan" }, { roll: 45, name: "Manju" }
];

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

const total = students.length;
const angle = 360 / total;
let rotation = 0;

/* 🌈 Light pastel colors */
const colors = [
    "#FFB3BA","#FFDFBA","#FFFFBA","#BAFFC9",
    "#BAE1FF","#D6BAFF","#FFBAE1","#BAF0FF","#D6FFBA","#FFF3BA"

]

let gradient = "conic-gradient(";
for (let i = 0; i < total; i++) {
    gradient += `${colors[i % colors.length]} ${i * angle}deg ${(i + 1) * angle}deg,`;
}
wheel.style.background = gradient.slice(0, -1) + ")";

/* 🎡 Spin */
function spinWheel() {
    const index = Math.floor(Math.random() * total);
    const stopAngle = index * angle;

    rotation += 360 * 6 + stopAngle;
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        result.innerText = `🎯 Roll No: ${students[index].roll} | 👤 ${students[index].name}`;
    }, 4000);
}
