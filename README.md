# NumScroller

jQuery плагин для анимированного увеличения чисел. В котором анимация начинается тогда, когда при прокрутке страницы число появляется на экране.

[Демо](http://demo.tinywall.net/numscroller/)

## Как подключить

1. Подключаем jQuery (если еще не подключен)

	```html
	<script src="https://yastatic.net/jquery/3.1.1/jquery.min.js"></script>
	```

2. Скачиваем файл [numscroller-1.0.js](https://raw.githubusercontent.com/mavlutovr/numscroller/gh-pages/numscroller-1.0.js) и сохраняем его в папку **js**

3. Добавляем, например, в \<head\> следующее:

	```html
	<script src="js/jquery.numscroller-1.0.js"></script>
	```

## Как использовать

Помещаем число вот в тег:

```html
<span class='numscroller' 
      data-min='1'
      data-max='1000'
      data-delay='5'
      data-increment='10'
      data-delimiter=' '
      >1000</span>
```

## Описание параметров

#### data-min

Начальное число, с которого начинается анимация.

#### data-max

Завершающее число, на котором заканчивается анимация.

#### data-delay

Количество секунд, которые длится анимация.

Не обязательный параметр.

#### data-increment

Сколько прибавлять к числу каждый кадр, чтобы достичь максимального значения в конце анимации.

Не обязательный параметр.

#### data-delimiter

Символ, которым разделять тысячные.

Запятая - 1,000,000

Пробел - 1 000 000