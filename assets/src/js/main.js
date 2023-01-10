// Мутим новогодние крестики нолики 2023 :)

const toasts = [
  `<p>Пожелаю в Новый год<br>
Не забыть, кто где живёт,<br>
Помнить собственное имя<br>
И остаться невредимым.</p>

<p>Честь и гордость не ронять,<br>
Без штанов не танцевать,<br>
Не заснуть под пышной елью,<br>
А добраться до постели!</p>`,

  `<p>Поздравляю с Новым годом!<br>
Вам желаю не работать,<br>
Только деньги получать,<br>
Тратить их и не считать.</p>

<p>Про врачей забыть навечно,<br>
Молодым быть бесконечно,<br>
Веселиться, не грустить,<br>
С позитивом в сердце жить!</p>`,

  `<p>Поздравляю с Новым годом<br>
И желаю счастья вам!<br>
Пусть оно, как тень, за вами<br>
Ходит прямо по пятам.</p>

<p>Пусть здоровье будет крепким,<br>
Словно каменный гранит,<br>
И весь год ни зуб, ни пятка,<br>
Ни живот не заболит.</p>

<p>Пусть умножатся доходы,<br>
Пусть уютным будет дом,<br>
Пусть вас радует душевно<br>
Всё, что видите кругом!</p>`,

  `<p>С наступающим, ребята!<br>
Пусть повысится зарплата,<br>
Чтоб весёлый дед Мороз<br>
Всем подарочек принёс!</p>

<p>В том подарке — банка счастья,<br>
Смеха целый килограмм,<br>
Заклинанье от напастей<br>
И пучок везенья Вам!</p>`,

  `<p>Пусть ярким будет Новый год<br>
На всякие события.<br>
Пусть будут счастье и любовь,<br>
И новые открытия!</p>

<p>Удача чтоб со всех сторон<br>
По жизни окружала.<br>
На все желания, при том,<br>
Финансов чтоб хватало!</p>

<p>Богатства, радости, тепла,<br>
Чтоб год прожить с любовью.<br>
И чтоб всегда на все дела<br>
Хватало бы здоровья!</p>`,

  `<p>Слов душевных, мыслей трезвых,<br>
Ярких, как гирлянда, дней!<br>
Нервов крепких, сил железных,<br>
Чувств пьянящих, как портвейн.</p>

<p>Денег легких, встреч удачных,<br>
Сладких, как конфеты, грез.<br>
Пусть в году приходит чаще<br>
Щедрый, добрый Дед Мороз!</p>`,

  `<p>Мандаринов килограммы,<br>
Ёлки аромат, гирлянды.<br>
Снова режем оливье,<br>
Снова весело в душе.</p>

<p>К черту все пошлём плохое:<br>
Вирус, кризис, карантин.<br>
Будем праздновать неделю,<br>
Новый год у нас один!</p>`,

  `<p>Желаю целый воз здоровья,<br>
Благополучия прицеп,<br>
Всегда отличного настроя<br>
И счастья не терять рецепт!</p>

<p>Пусть будет воодушевленной<br>
Душа весь год, полна надежд,<br>
А тело будет закаленным<br>
От всех болезней и от бед!</p>`,

  `<p>Пусть дед с кудрявой бородой<br>
Притащит вам мешок домой,<br>
А в том мешке здоровья пуд,<br>
Сто тысяч радостных минут,<br>
Тепло и радость на весь год,<br>
В делах неведомых высот,<br>
Любви, ну просто неземной,<br>
Коль надо, славы мировой,<br>
Успехов, тазик оливье<br>
И позитива в голове!</p>`,

  `<p>С Новым годом поздравляю!<br>
И от всей души желаю<br>
Радости, чудес, тепла,<br>
Счастья в жизни и добра.</p>

<p>Чтобы Дедушка Мороз<br>
Вам под ёлочку принёс —<br>
В дом уют, любовь, порядок,<br>
А в карман − большой достаток.</p>

<p>Никогда не унывайте,<br>
О хорошем лишь мечтайте,<br>
Хорошо повеселитесь,<br>
На танцполе оторвитесь!</p>`,

  `<p>Не болеть, не обижаться,<br>
В талии не поправляться,<br>
Во дворце прекрасном жить,<br>
На работу не спешить.</p>

<p>Самолет пусть будет личный,<br>
Шопинг каждый день отличный,<br>
Будьте рады мелочам,<br>
С Новым годом! Счастья вам!</p>`,

  `<p>Пусть грядущий Новый год<br>
Сказку, радость принесет,<br>
Ласку, нежность, страсть и кайф,<br>
И от жизни легкий драйв!</p>

<p>Доброту, любовь, везение<br>
И немножечко терпения,<br>
Чтоб уметь не психовать<br>
И спокойно подождать.</p>

<p>В интернете стать звездою,<br>
Чтоб подписчики − толпою,<br>
Денег на счетах в офшоре,<br>
Жить под пальмами на море!</p>`,

  `<p>С Новым годом, с белым снегом,<br>
С елочными огоньками!<br>
Пусть любовь, здоровье, счастье<br>
Бесконечно будут с вами.</p>

<p>Пусть удача будет крепче,<br>
Чем стоградусный мороз,<br>
Всё, что в полночь загадали,<br>
Непременно чтоб сбылось!</p>`,

  `<p>Вам желаю в Новый Год<br>
Жить без горя и забот!<br>
Не ходить весь год в аптеку,<br>
Погасить всю ипотеку,<br>
Чаще ездить на Багамы,<br>
Из проблем не делать драмы<br>
И обиды не копить,<br>
Сразу проще станет жить!</p>`,

  `<p>Желаю так вам веселиться,<br>
Чтобы под елку не свалиться,<br>
Чтобы в салате не уснуть,<br>
По-настоящему гульнуть!</p>

<p>Чтоб голова осталась ясной,<br>
А жизнь всегда была прекрасной!<br>
Еще финансовой свободы,<br>
Любви, тепла! И с Новым годом!</p>`,

  `<p>Селедочка под шубой<br>
На праздничном столе,<br>
Великолепный студень,<br>
Салатик «Оливье».</p>

<p>Шампусик, мандарины,<br>
С икрою бутерброд…<br>
Вкуснее нет картины —<br>
Встречаем Новый год!</p>

<p>Под бой курантов жахнем<br>
Мы пробкой в потолок,<br>
Шампанского шарахнем<br>
За предстоящий год!</p>

<p>Пусть будет он счастливым<br>
И ярким для всех нас,<br>
Сюрпризами приятными<br>
Порадует не раз!</p>`,

  `<p>Поздравляю с Новым годом<br>
И желаю бед не знать,<br>
Кушать красную икорку<br>
И шампанским запивать.</p>

<p>Прикупить себе Феррари<br>
И избушку на Бали,<br>
Жить в достатке, понимании<br>
И большой-большой любви.</p>

<p>Год грядущий непременно<br>
Пусть желанья воплотит,<br>
Ну, и в сторону удачи<br>
Жизнь пусть сделает кульбит.</p>`,

  `<p>Вам желаю в Новый год<br>
Жить с везением, без забот,<br>
Грусти и проблем не знать,<br>
И на юг зимой слетать!</p>

<p>Счастья в жизни, вдохновения,<br>
Заводного настроения,<br>
Веселиться, танцевать,<br>
На танцполе зажигать!</p>

<p>Быть всегда на высоте,<br>
Жить в достатке, красоте,<br>
Никогда не унывать,<br>
Верить в чудо и мечтать!</p>`,

  `<p>Пусть приходит Новый год<br>
И удачу принесёт,<br>
Пусть поделится деньгами —<br>
Остальное сможем сами!</p>

<p>Пусть ворвётся в жизнь веселье,<br>
Дни проходят с настроением,<br>
Длится радость круглый год,<br>
И вообще во всём везёт!</p>`,
];

const area = document.getElementById("area"),
      boxes = document.getElementsByClassName("box"),
      overlay = document.getElementById("overlay"),
      toast = document.getElementById("toast"),
      victories = document.getElementById("victories"),
      defeats = document.getElementById("defeats"),  
      toast_text = document.querySelector(".toast-text"),
      lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  let count_victories = count_defeats = 0,
      crosses_win = zeros_win = drawn_game = game_over = show_toast = false,
      move_permit = true;

area.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") return;
  const box = event.target;

  if (box.innerHTML === "" && move_permit === true) {
    box.innerHTML = '<img src="/img/santa.svg" alt="">';
    move_permit = false;
    check();

    if (game_over === true) return;

    if (return_empty_boxes().length > 0 && game_over === false) {
      // Создаём объект promise
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fill());
          reject(new Error("Ошибка вызова функции fill"));
        }, 500);
      }).then(
        (result) => {
          check();
        },
        (error) => console.log("Rejected: " + error)
      );
    }
  }
});

overlay.addEventListener("click", function (event) {
  this.style.opacity = "0";
  if (crosses_win === false && show_toast === false) {
    document.querySelectorAll(".box img").forEach((img) => {
      img.style.filter = "invert(0)";
    });
    overlay.style.display = "none";
    clear_area();
  }
  if (crosses_win === true && show_toast === true) {
    overlay.style.display = "none";
    toast.classList.remove('show-toast');
    clear_area();
    crosses_win = false;
    show_toast = false;
  }
  victories.classList.remove('heart-beat');
  defeats.classList.remove('heart-beat');
});
toast.addEventListener("click", function (event) {
  overlay.style.opacity = "0";
  if (crosses_win === false && show_toast === false) {
    document.querySelectorAll(".box img").forEach((img) => {
      img.style.filter = "invert(0)";
    });
    overlay.style.display = "none";
    clear_area();
  }
  if (crosses_win === true && show_toast === true) {

      toast.classList.remove('show-toast');
      overlay.style.display = "none";
      clear_area();
      crosses_win = false;
      show_toast = false;
  }
  victories.classList.remove('heart-beat');
  defeats.classList.remove('heart-beat');
});

function fill() {
  if (return_empty_boxes().length > 0) {
    // смотрим присутствует ли в линии два нуля, и, если присутствуют,
    // то закрываем линию, прерываем выполнение функции и выигрываем партию
    for (let i = 0; i < lines.length; i++) {
      if (
        boxes[lines[i][0]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][1]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML === ""
      ) {
        boxes[lines[i][2]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
      if (
        boxes[lines[i][1]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][0]].innerHTML === ""
      ) {
        boxes[lines[i][0]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
      if (
        boxes[lines[i][0]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML ===
          '<img src="/img/christmas-tree.svg" alt="">' &&
        boxes[lines[i][1]].innerHTML === ""
      ) {
        boxes[lines[i][1]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
    }
    // проходимся по массиву линий и, если в первой попавшейся линии есть два икса,
    // заполняем пустой бокс нулём и прерываем выполнение функции
    for (let i = 0; i < lines.length; i++) {
      if (
        boxes[lines[i][0]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][1]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML === ""
      ) {
        boxes[lines[i][2]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
      if (
        boxes[lines[i][1]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][0]].innerHTML === ""
      ) {
        boxes[lines[i][0]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
      if (
        boxes[lines[i][0]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][2]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
        boxes[lines[i][1]].innerHTML === ""
      ) {
        boxes[lines[i][1]].innerHTML =
          '<img src="/img/christmas-tree.svg" alt="">';
        move_permit = true;
        return;
      }
    }
    const empty_boxes = return_empty_boxes();
    const rand = empty_boxes[Math.floor(Math.random() * empty_boxes.length)];
    boxes[rand].innerHTML = '<img src="/img/christmas-tree.svg" alt="">';
    // boxes[rand].style.color = 'brown';
    move_permit = true;
    return;
  }
}

function return_empty_boxes() {
  const empty_boxes = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML == "") empty_boxes.push(i);
  }
  return empty_boxes;
}

function clear_area() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#fff";
  }
  crosses_win = zeros_win = drawn_game = game_over = false;
  move_permit = true;
}

function check() {
  for (let i = 0; i < lines.length; i++) {
    if (
      boxes[lines[i][0]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
      boxes[lines[i][1]].innerHTML === '<img src="/img/santa.svg" alt="">' &&
      boxes[lines[i][2]].innerHTML === '<img src="/img/santa.svg" alt="">'
    ) {
      // Победили крестики!
      boxes[lines[i][0]].style.background =
        boxes[lines[i][1]].style.background =
        boxes[lines[i][2]].style.background =
          "#ff7675";
      overlay.style.display = "block";      
      drawn_game = zeros_win = false;
      victories.innerText = ++count_victories;
      victories.classList.add('heart-beat');
      boxes[lines[i][0]].querySelector('img').classList.add('heart-beat');
      boxes[lines[i][1]].querySelector('img').classList.add('heart-beat');
      boxes[lines[i][2]].querySelector('img').classList.add('heart-beat');
      move_permit = true;
      game_over = true;
      setTimeout(() => {
        overlay.style.opacity = "0.6";
        // toast.style.display = "flex";        
        toast_text.innerHTML = toasts[Math.floor(Math.random() * toasts.length)];
        toast.classList.add('show-toast');
        show_toast = true;
        crosses_win = true;
      }, 1000);
      return;
    } else if (
      boxes[lines[i][0]].innerHTML ===
        '<img src="/img/christmas-tree.svg" alt="">' &&
      boxes[lines[i][1]].innerHTML ===
        '<img src="/img/christmas-tree.svg" alt="">' &&
      boxes[lines[i][2]].innerHTML ===
        '<img src="/img/christmas-tree.svg" alt="">'
    ) {
      // Победили нолики!
      boxes[lines[i][0]].style.background =
        boxes[lines[i][1]].style.background =
        boxes[lines[i][2]].style.background =
          "#c0fb9d";

      overlay.style.display = "block";
      drawn_game = crosses_win = false;
      zeros_win = true;
      defeats.innerText = ++count_defeats;
      defeats.classList.add('heart-beat');
      boxes[lines[i][0]].querySelector('img').classList.add('heart-beat');
      boxes[lines[i][1]].querySelector('img').classList.add('heart-beat');
      boxes[lines[i][2]].querySelector('img').classList.add('heart-beat');
      move_permit = true;
      game_over = true;
      return;
    }
  }
  // if (return_empty_boxes().length === 0 && crosses_win === false && zeros_win === false) {
  if (return_empty_boxes().length === 0) {
    // console.log('Ничья!');
    [...boxes].forEach(box => {
      box.querySelector('img').classList.add('heart-beat');
    })
    overlay.style.display = "block";
    crosses_win = zeros_win = false;
    move_permit = true;
    drawn_game = game_over = true;
    return false;
  }
}
