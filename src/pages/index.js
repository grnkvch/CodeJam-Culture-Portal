import React, {Component} from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Team from '../components/Team';
import AuthorOfTheDay from '../components/AuthorOfTheDay';

import "./index.css";

const team = [
  { 
    name : "Ольга Лазаревич",
    nickname : "OlgaLazarevich",
    gitHub : "https://github.com/OlgaLazarevich",
    src : "https://avatars1.githubusercontent.com/u/29776065?s=400&u=3d49e6fc037f776565828ebf86f6d5f6aaeca297&v=4"
  },
  {
    name : "Валентин Гринкевич",
    nickname : "grnkvch",
    gitHub : "https://github.com/grnkvch",
    src : "https://avatars1.githubusercontent.com/u/43145804?s=460&v=4"
  },
  {
    name : "Евгений Пригодский",
    nickname : "dgekaa",
    gitHub : "https://github.com/dgekaa",
    src : "https://avatars3.githubusercontent.com/u/20840745?s=400&u=c7b401a4a46e72ca40bb7cdc1d59fb5f4f75e10a&v=4"
  },
  {
    name : "Антон Крутенок",
    nickname : "AntonySawyer",
    gitHub : "https://github.com/AntonySawyer",
    src : "https://www.w3schools.com/w3css/img_avatar3.png"
  },
  {
    name : "Артём Дачевский",
    nickname : "DevandScorp",
    gitHub : "https://github.com/DevandScorp",
    src : "https://www.w3schools.com/w3css/img_avatar3.png"
  },

];



      let T = {
          key: "trnsl.1.1.20190126T205035Z.38517e0c4e4778db.77e64f22d6472c24a94793de488335b46356f40b",
          api: "https://translate.yandex.net/api/v1.5/tr.json/translate",
          translate: function (CLASS, callback){
            let text = document.querySelectorAll(CLASS).innerHTML;
            let url = this.api+"?";
            url += "key="+this.key;
            url+="&text="+text;
            url+="&lang=ru-en";

            let ajax = new XMLHttpRequest();
            ajax.open("GET", url, true);
            ajax.onreadystatechange = function() {
              if(ajax.readyState === 4){
                if(ajax.status === 200){
                  text = ajax.responseText;
                  text = JSON.parse(text);
                  text = text.text[0];
                  callback(text);
                }
              }
            }
            ajax.send(null);
          },
          revert : function(class_){

          }
        };

        let log = (text) => {
          console.log(text);
        }



class IndexPage extends Component {
    constructor(props) {
      super(props);
    }

  componentDidMount(){
    T.translate(".description",log);
  };

  render () {
    return(
      <Layout>
        <h3 style={{textAlign:'center'}}>Информация на данном портале посвящена <br/> "Белорусскому союзу архитекторов"</h3>
        <div className="description">
          <p>Белорусскому союзу архитекторов уже исполнилось 70 лет. Его история — часть истории страны и народа, его созидательной деятельности. Пройден большой и сложный путь — путь поиска и воплощения, ошибок и достижений. И сегодняшняя Беларусь являет миру свое прекрасное обновленное лицо благодаря таланту и умению, профессиональному мастерству Архитекторов, чьим неутомимым трудом на протяжении многих лет прирастала сокровищница белорусского зодчества.</p>
          <div style={{marginTop :"12px"}}>
            <i className="description">"...Меняется лик земли. И только перо летописца дерзает удержать на ветхих страницах хартий приметы текучего вихря, исчезающего в небытии. Трудись, летописец! Ветер времени листает страницы судьбы"</i>
            <span>, — писал </span>
            <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%BE%D0%B2,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87" className="Balashov"> Дмитрий Балашов</a>
            <span>, реконструировавший по разрозненным летописным, архивным источникам историю не одного народа. </span>
          </div>
          <span className="description" style={{display: 'block', padding: '10px 0'}}>С чего же все начиналось у нас, кто стоял у истоков творческого союза, кто направлял и претворял поставленные жизнью задачи?</span>
          <p>Историческая хроника, запечатленная в документах, постановлениях, резолюциях, приоткрывает нам завесу времени, доносит стиль творчества и руководства, настроения и устремления нескольких поколений зодчих. Все это прочитывается и между строк документов, и в авторских произведениях. В них — дух эпохи, сложной и неоднозначной, жизнь и творческие порывы людей, посвятивших себя Архитектуре. В них — история творческого содружества людей. А над всем этим — дыхание Вечности.</p>
          <span style={{display: 'block'}}>Мы перевернули последнюю страницу хроники Белорусского Союза архитекторов. Но не последнюю в его деятельности. Время впишет новые имена, новые идеи, новые объекты. Но это — в будущем. А сегодня мы приносим искреннюю благодарность всем архитекторам за созданное их трудом.</span>
        </div>
        <AuthorOfTheDay />
        <Team data={team}/>
      </Layout>
    )
  }
  
};

export default IndexPage




// let T = {
//   key: "trnsl.1.1.20190126T205035Z.38517e0c4e4778db.77e64f22d6472c24a94793de488335b46356f40b",
//   api: "https://translate.yandex.net/api/v1.5/tr.json/translate",
//   translate: function (text, callback){
//     let url = this.api+"?";
//     url += "key="+this.key;
//     url+="&text="+text;
//     url+="&lang=ru-en";

//     let ajax = new XMLHttpRequest();
//     ajax.open("GET", url, true);
//     ajax.onreadystatechange = function() {
//       if(ajax.readyState === 4){
//         if(ajax.status === 200){
//           text = ajax.responseText;
//           text = JSON.parse(text);
//           text = text.text[0];
//           callback(text);
//         }
//       }
//     }
//     ajax.send(null);
//   },
//   revert : function(class_){

//   }
// };

// let log = (text) => {
//   console.log(text);
// }

// T.translate("хочу я учить джаваскрипт завтра", log);