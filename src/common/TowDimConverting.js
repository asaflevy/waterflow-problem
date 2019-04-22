/**
 * convert 1Dim Array to Towers 2Dim array
 * x: present water drop
 * 1: block in the building
 * 0: no block in the building
 * @param startArr
 * @returns {{tower_model: Array, dropSum: number}}
 */

export default class TowDimConverting {
    convert(startArr) {
        let weight = startArr.length,
            height = startArr.reduce(function (a, b) {
                return Math.max(a, b);
            }),
            dropSum = 0;

        let tower_model = [];

        for (let i = 0; i < height; i++) {
            let level = [];
            for (let j = 0; j < weight; j++) {
                let hasBlock = (height - (i)) > startArr[j] ? 0 : 1;
                level.push(hasBlock)
            }
            tower_model.push(level)
        }

        /**
         * calculating the number of water drops between the building
         */
        for (let i = 0; i < height; i++) {
            for (let j = 1; j < weight - 1; j++) {
                let row = tower_model[i];
                if (!row[j] && checkForLeftWall(row, j) && checkForRightWall(row, j)) {
                    row[j] = 'x';
                    dropSum++
                }
            }
        }

        function checkForLeftWall(row, index) {
            return row.slice(0, index).includes(1);
        }

        function checkForRightWall(row, index) {
            return row.slice(index + 1, row.length).includes(1);
        }

        return {tower_model, dropSum};
    }
}