//your JS code here. If required.
const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    const resetGridColors = () => {
      for (let i = 1; i <= 9; i++) {
        const block = document.getElementById(i.toString());
        if (block) {
          block.style.backgroundColor = "transparent";
        }
      }
    };

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all first
      resetGridColors();

      // Change color of specific block
      const targetBlock = document.getElementById(blockId);
      if (targetBlock) {
        targetBlock.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener("click", resetGridColors);