const input = document.querySelector("input");
      const para = document.querySelector("p");

      function perimeter(num) {
        return num * 3.14 * 2;
      }

      input.addEventListener("change", () => {
        const num = parseFloat(input.value);
        if (isNaN(num)) {
          para.textContent = "Please, write a number!";
        } else {
          para.textContent = `The perimeter of a circle with a radius of ${num} is: ${perimeter(
            num
          )}`;
        }
      });

