import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface SliderMinuteProps {
  step: number[];
  name: string;
  onChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
}
export const SliderSelection = ({
  step,
  name,
  onChange,
}: SliderMinuteProps) => {
  const marks = step.map((value) => ({
    value: value,
    label: `${value}`,
  }));

  return (
    <div className="slider">
      <h2>{name}</h2>
      <Box sx={{ width: "100%" }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={step[0]}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          min={step[0]}
          max={step[step.length - 1]}
          onChange={onChange}
        />
      </Box>
    </div>
  );
};
