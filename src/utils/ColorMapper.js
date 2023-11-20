export class ColorMapper {
    static colorMap = {
        PtsColor: [25, 18, 13, 10],
        TargetsColor: [13, 9, 6, 5],   
        RecColor: [13, 10, 6, 4],
        TdColor: [3, 2, 1],
        RankColor: [2,3,8,12,999],
        PassAttColor: [45, 40, 30, 25],
        PassCompColor: [30, 25, 20, 15],
        PassYdColor: [300, 250, 200, 150],
        PassTdColor: [4, 3, 2, 1],
        QbRushAttColor: [10, 8, 6, 4],
        QbRushYdColor: [50, 40, 20, 10],
        QbRushTdColor: [2, 1],
        QbPtsColor: [30, 25, 20, 15],
        RushYdColor: [100, 80, 60, 40],
        RushAttColor: [20, 15, 10, 5],
        RbReceptionsColor: [9, 6, 4, 2],
        RbTargetColor: [12, 9, 6, 3],
        RecTdColor: [2, 1],
        WrRecYdColor: [100, 80, 60, 40]
      };

        static findFunc(funcName, value, reverse = 0) {
            const mapValue = ColorMapper.colorMap[funcName];
            const breakpoints = Array.isArray(mapValue) ? mapValue : [];
            return ColorMapper.findColor(value, breakpoints, reverse);
        }

        static findColor(value, breakpoints, reverse) {
            const colors = ['bg-yellow-500', 'bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-red-500'];
            const defaultColor = 'bg-red-500';
            for (let i = 0; i < breakpoints.length; i++) {
                if (reverse ? value <= breakpoints[i] : value >= breakpoints[i]) {
                    return colors[i];
                }
            }
            return defaultColor;
        }
    }