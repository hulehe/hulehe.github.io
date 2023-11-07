let typed;

// 更换语言函数
function changeLang(lang) {
  // 创建一个空对象来存储英文内容
  var enData = {};

  // 遍历JSON数据并将只包含英文内容的部分存储到enData对象中
  for (var key in allText) {
    if (allText.hasOwnProperty(key)) {
      if (allText[key].hasOwnProperty(lang)) {
        enData[key] = allText[key][lang];
      }
    }
  }

  return enData;


}

// 把数据导入逐一html中
function addText(obj) {
  document.getElementById('title').innerHTML = obj["Huzi's Portfolio"];
  document.getElementById("header-text").innerHTML = obj["Huzi"];
  document.getElementById("nav-home-text").innerHTML = obj["Home"];
  document.getElementById("nav-about-text").innerHTML = obj["About"];
  document.getElementById("nav-resume-text").innerHTML = obj["Resume"];
  document.getElementById("nav-portfolio-text").innerHTML = obj["Portfolio"];
  document.getElementById("nav-contact-text").innerHTML = obj["Contact"];
  document.getElementById("home-name").innerHTML = obj["Huzi"];
  // document.getElementById("home-p").innerHTML = obj["I'm"];
  // document.getElementById("home-profession").setAttribute('data-typed-items', obj["Programer, Robotic researcher, Freelancer"]);

  document.getElementById("about-title").innerHTML = obj["About"];
  document.getElementById("about-state").innerHTML = obj["about-state"];
  document.getElementById("about-professions").innerHTML = obj["Robot developer and Programer"];
  document.getElementById("about-professions-state").innerHTML = obj["about-professions-state"];
  document.getElementById("Birthday").innerHTML = obj["Birthday"];
  document.getElementById("Website").innerHTML = obj["Website"];
  document.getElementById("Wechat").innerHTML = obj["Wechat/Kakaotalk"];
  document.getElementById("City").innerHTML = obj["City"];
  document.getElementById("city-address").innerHTML = obj["Siheung-si, Gyeonggi-do, South Korea"];
  document.getElementById("Age").innerHTML = obj["Age"];
  document.getElementById("Degree").innerHTML = obj["Degree"];
  document.getElementById("Email").innerHTML = obj["Email"];
  document.getElementById("Freelance").innerHTML = obj["Freelance"];
  document.getElementById("Available").innerHTML = obj["Available"];
  document.getElementById("Phd").innerHTML = obj["Phd"];
  document.getElementById("about-professions-state-2").innerHTML = obj["about-professions-state-2"];

  document.getElementById("facts-title").innerHTML = obj["Facts"];
  document.getElementById("facts-state").innerHTML = obj["facts-state"];

  document.getElementById("skills-title").innerHTML = obj["Skills"];
  document.getElementById("skills-state").innerHTML = obj["skills-state"];

  document.getElementById("resume-title").innerHTML = obj["Resume"];
  document.getElementById("resume-sumary-title").innerHTML = obj["Sumary"];
  document.getElementById("resume-name").innerHTML = obj["Huzi"];
  document.getElementById("resume-sumary").innerHTML = obj["resume-sumary"];
  document.getElementById("resume-address").innerHTML = obj["Siheung-si, Gyeonggi-do, South Korea"];

  document.getElementById("resume-education-title").innerHTML = obj["Education"];
  document.getElementById("resume-phd").innerHTML = obj["PhD of Biomedical Engineering"];
  document.getElementById("resume-KU").innerHTML = obj["Korea University, Seoul, South Korea"];
  document.getElementById("resume-master").innerHTML = obj["Master of Biomedical Engineering"];
  document.getElementById("resume-NEU").innerHTML = obj["Northeastern University, Shenyang, China"];
  document.getElementById("resume-bachelor").innerHTML = obj["Bachelor of Biomedical Engineering"];
  document.getElementById("resume-bNEU").innerHTML = obj["Northeastern University, Shenyang, China"];

  document.getElementById("resume-profession-title").innerHTML = obj["Professional Experience"];
  document.getElementById("resume-profession1-title").innerHTML = obj["Chief Researcher on Commercial Robot Development"];
  document.getElementById("resume-profession1-addr").innerHTML = obj["Seoul, South Korea"];
  document.getElementById("resume-profession1-state1").innerHTML = obj["Development on commercial service robots including information robot and patrol robot"];
  document.getElementById("resume-profession1-state2").innerHTML = obj["Mainly on robot operating system development"];
  document.getElementById("resume-profession2-title").innerHTML = obj["Post-doc researcher on Surgical Robot Development"];
  document.getElementById("resume-profession2-addr").innerHTML = obj["Seoul, South Korea"];
  document.getElementById("resume-profession2-state1").innerHTML = obj["Research and development on cardiovascular surgical robot"];
  document.getElementById("resume-profession2-state2").innerHTML = obj["Mainly on robot control"];
  document.getElementById("resume-profession3-title").innerHTML = obj["Researcher on Surgical Robot Development"];
  document.getElementById("resume-profession3-addr").innerHTML = obj["Goyang-si, Gyeonggi-do, South Korea"];
  document.getElementById("resume-profession3-state1").innerHTML = obj["Research and development on Laparoscopic surgical robotic system"];
  document.getElementById("resume-profession3-state2").innerHTML = obj["Haptic feedback technology research and Robot teleoperation control"];

  document.getElementById("portfolio-title").innerHTML = obj["Portfolio"];
  document.getElementById("portfolio-state").innerHTML = obj["Below are some apps and web demos that I have personally designed and coded with web programming skills."];
  document.getElementById("portfolio-all").innerHTML = obj["All"];
  document.getElementById("portfolio-app").innerHTML = obj["App"];
  document.getElementById("portfolio-web").innerHTML = obj["Web"];

  document.getElementById("contact-title").innerHTML = obj["Contact"];
  document.getElementById("contact-state").innerHTML = obj["If you have any questions, please feel free to contact me."];
  document.getElementById("contact-addr").innerHTML = obj["Location"];
  document.getElementById("contact-addr-location").innerHTML = obj["Siheung-si, Gyeonggi-do, South Korea"];
  document.getElementById("contact-email").innerHTML = obj["Email"];
  document.getElementById("contact-wechat").innerHTML = obj["Wechat"];
  document.getElementById("contact-kakaotalk").innerHTML = obj["Kakaotalk"];
}





window.onload = function () {
  const imgEn = document.querySelector('.flags > img[alt="us-25.png"]');
  const imgCn = document.querySelector('.flags > img[alt="cn-25.png"]');
  const imgKr = document.querySelector('.flags > img[alt="kr-25.png"]');
  imgEn.addEventListener("click", () => { addText(changeLang('en')); });
  imgCn.addEventListener("click", () => { addText(changeLang('cn')); });
  imgKr.addEventListener("click", () => { addText(changeLang('kr')); });
}