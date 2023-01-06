// screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
// screen.lockOrientationUniversal('portrait');

var toasts = [
  `Пожелаю в Новый год
Не забыть, кто где живёт,
Помнить собственное имя
И остаться невредимым.

Честь и гордость не ронять,
Без штанов не танцевать,
Не заснуть под пышной елью,
А добраться до постели!`,

  `Поздравляю с Новым годом!
Вам желаю не работать,
Только деньги получать,
Тратить их и не считать.

Про врачей забыть навечно,
Молодым быть бесконечно,
Веселиться, не грустить,
С позитивом в сердце жить!`,

  `Поздравляю с Новым годом
И желаю счастья вам!
Пусть оно, как тень, за вами
Ходит прямо по пятам.

Пусть здоровье будет крепким,
Словно каменный гранит,
И весь год ни зуб, ни пятка,
Ни живот не заболит.

Пусть умножатся доходы,
Пусть уютным будет дом,
Пусть вас радует душевно
Всё, что видите кругом!`,

  `С наступающим, ребята!
Пусть повысится зарплата,
Чтоб весёлый дед Мороз
Всем подарочек принёс!

В том подарке — банка счастья,
Смеха целый килограмм,
Заклинанье от напастей
И пучок везенья Вам!`,

  `Пусть ярким будет Новый год
На всякие события.
Пусть будут счастье и любовь,
И новые открытия!

Удача чтоб со всех сторон
По жизни окружала.
На все желания, при том,
Финансов чтоб хватало!

Богатства, радости, тепла,
Чтоб год прожить с любовью.
И чтоб всегда на все дела
Хватало бы здоровья!`,

  `Слов душевных, мыслей трезвых,
Ярких, как гирлянда, дней!
Нервов крепких, сил железных,
Чувств пьянящих, как портвейн.

Денег легких, встреч удачных,
Сладких, как конфеты, грез.
Пусть в году приходит чаще
Щедрый, добрый Дед Мороз!`,

  `Мандаринов килограммы,
Ёлки аромат, гирлянды.
Снова режем оливье,
Снова весело в душе.

К черту все пошлём плохое:
Вирус, кризис, карантин.
Будем праздновать неделю,
Новый год у нас один!`,

  `Желаю целый воз здоровья,
Благополучия прицеп,
Всегда отличного настроя
И счастья не терять рецепт!

Пусть будет воодушевленной
Душа весь год, полна надежд,
А тело будет закаленным
От всех болезней и от бед!`,

  `Пусть дед с кудрявой бородой
Притащит вам мешок домой,
А в том мешке здоровья пуд,
Сто тысяч радостных минут,
Тепло и радость на весь год,
В делах неведомых высот,
Любви, ну просто неземной,
Коль надо, славы мировой,
Успехов, тазик оливье
И позитива в голове!`,

  `С Новым годом поздравляю!
И от всей души желаю
Радости, чудес, тепла,
Счастья в жизни и добра.

Чтобы Дедушка Мороз
Вам под ёлочку принёс —
В дом уют, любовь, порядок,
А в карман − большой достаток.

Никогда не унывайте,
О хорошем лишь мечтайте,
Хорошо повеселитесь,
На танцполе оторвитесь!`,

  `Не болеть, не обижаться,
В талии не поправляться,
Во дворце прекрасном жить,
На работу не спешить.

Самолет пусть будет личный,
Шопинг каждый день отличный,
Будьте рады мелочам,
С Новым годом! Счастья вам!`,

  `Пусть грядущий Новый год
Сказку, радость принесет,
Ласку, нежность, страсть и кайф,
И от жизни легкий драйв!

Доброту, любовь, везение
И немножечко терпения,
Чтоб уметь не психовать
И спокойно подождать.

В интернете стать звездою,
Чтоб подписчики − толпою,
Денег на счетах в офшоре,
Жить под пальмами на море!`,

  `С Новым годом, с белым снегом,
С елочными огоньками!
Пусть любовь, здоровье, счастье
Бесконечно будут с вами.

Пусть удача будет крепче,
Чем стоградусный мороз,
Всё, что в полночь загадали,
Непременно чтоб сбылось!`,

  `Вам желаю в Новый Год
Жить без горя и забот!
Не ходить весь год в аптеку,
Погасить всю ипотеку,
Чаще ездить на Багамы,
Из проблем не делать драмы
И обиды не копить,
Сразу проще станет жить!`,

  `Желаю так вам веселиться,
Чтобы под елку не свалиться,
Чтобы в салате не уснуть,
По-настоящему гульнуть!

Чтоб голова осталась ясной,
А жизнь всегда была прекрасной!
Еще финансовой свободы,
Любви, тепла! И с Новым годом!`,

  `Селедочка под шубой
На праздничном столе,
Великолепный студень,
Салатик «Оливье».

Шампусик, мандарины,
С икрою бутерброд…
Вкуснее нет картины —
Встречаем Новый год!

Под бой курантов жахнем
Мы пробкой в потолок,
Шампанского шарахнем
За предстоящий год!

Пусть будет он счастливым
И ярким для всех нас,
Сюрпризами приятными
Порадует не раз!`,

  `Поздравляю с Новым годом
И желаю бед не знать,
Кушать красную икорку
И шампанским запивать.

Прикупить себе Феррари
И избушку на Бали,
Жить в достатке, понимании
И большой-большой любви.

Год грядущий непременно
Пусть желанья воплотит,
Ну, и в сторону удачи
Жизнь пусть сделает кульбит.`,

  `Вам желаю в Новый год
Жить с везением, без забот,
Грусти и проблем не знать,
И на юг зимой слетать!

Счастья в жизни, вдохновения,
Заводного настроения,
Веселиться, танцевать,
На танцполе зажигать!

Быть всегда на высоте,
Жить в достатке, красоте,
Никогда не унывать,
Верить в чудо и мечтать!`,

  `Пусть приходит Новый год
И удачу принесёт,
Пусть поделится деньгами —
Остальное сможем сами!

Пусть ворвётся в жизнь веселье,
Дни проходят с настроением,
Длится радость круглый год,
И вообще во всём везёт!`,
];

var area = document.getElementById("area"),
  boxes = document.getElementsByClassName("box"),
  overlay = document.getElementById("overlay"),
  toast = document.getElementById("toast"),
  victories = document.getElementById("victories"),
  defeats = document.getElementById("defeats"),
  count_victories = (count_defeats = 0),
  lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],
  crosses_win = (zeros_win = drawn_game = game_over = show_toast = false),
  move_permit = true;

area.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") return;
  var box = event.target;

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
  if (crosses_win === false && show_toast === false) {
    document.querySelectorAll(".box img").forEach((img) => {
      img.style.filter = "invert(0)";
    });
    overlay.style.display = "none";
    toast.style.display = "none";
    clear_area();
  }
  if (crosses_win === true && show_toast === true) {
    overlay.style.display = "none";
    toast.style.display = "none";
    clear_area();
    crosses_win = false;
    show_toast = false;
  }
  victories.classList.remove('score-animate');
  defeats.classList.remove('score-animate');
});
toast.addEventListener("click", function (event) {
  if (crosses_win === false && show_toast === false) {
    document.querySelectorAll(".box img").forEach((img) => {
      img.style.filter = "invert(0)";
    });
    toast.style.display = "none";
    overlay.style.display = "none";
    clear_area();
  }
  if (crosses_win === true && show_toast === true) {
      toast.style.display = "none";
      overlay.style.display = "none";
      clear_area();
      crosses_win = false;
      show_toast = false;
  }
  victories.classList.remove('score-animate');
  defeats.classList.remove('score-animate');
});

function fill() {
  if (return_empty_boxes().length > 0) {
    // смотрим присутствует ли в линии два нуля, и, если присутствуют,
    // то закрываем линию, прерываем выполнение функции и выигрываем партию
    for (var i = 0; i < lines.length; i++) {
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
    for (var i = 0; i < lines.length; i++) {
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
    var empty_boxes = return_empty_boxes();
    var rand = empty_boxes[Math.floor(Math.random() * empty_boxes.length)];
    boxes[rand].innerHTML = '<img src="/img/christmas-tree.svg" alt="">';
    // boxes[rand].style.color = 'brown';
    move_permit = true;
    return;
  }
}

function return_empty_boxes() {
  var empty_boxes = [];
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML == "") empty_boxes.push(i);
  }
  return empty_boxes;
}

function clear_area() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].style.backgroundColor = "#fff";
  }
  crosses_win = zeros_win = drawn_game = game_over = false;
  move_permit = true;
}

function check() {
  for (var i = 0; i < lines.length; i++) {
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
      victories.classList.add('score-animate');
      boxes[lines[i][0]].querySelector('img').classList.add('score-animate');
      boxes[lines[i][1]].querySelector('img').classList.add('score-animate');
      boxes[lines[i][2]].querySelector('img').classList.add('score-animate');
      move_permit = true;
      game_over = true;
      setTimeout(() => {
        overlay.style.display = "block";
        toast.style.display = "block";
        toast.innerHTML =
          "<pre>" +
          toasts[Math.floor(Math.random() * toasts.length)] +
          "</pre>";
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
      defeats.classList.add('score-animate');
      boxes[lines[i][0]].querySelector('img').classList.add('score-animate');
      boxes[lines[i][1]].querySelector('img').classList.add('score-animate');
      boxes[lines[i][2]].querySelector('img').classList.add('score-animate');
      move_permit = true;
      game_over = true;
      return;
    }
  }
  // if (return_empty_boxes().length === 0 && crosses_win === false && zeros_win === false) {
  if (return_empty_boxes().length === 0) {
    // alert ('Ничья!');
    overlay.style.display = "block";
    crosses_win = zeros_win = false;
    move_permit = true;
    drawn_game = game_over = true;
    return false;
  }
}
