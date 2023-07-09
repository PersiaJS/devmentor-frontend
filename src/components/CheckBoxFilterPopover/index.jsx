import { Box, Popover } from "@chakra-ui/react";
import { FilterPopoverButton } from "../FilterPopoverButton";
import { FilterPopoverContent } from "../FilterPopoverContent";
import { CheckboxFilter } from "../CheckboxFilter";
import useFilterState from "@/hooks/useFilterState";
import { useButtonWidth } from "@/hooks/useButtonWidth";

export const CheckboxFilterPopover = ({ title, data, showSearch = false }) => {
  const state = useFilterState({
    onSubmit: console.log,
  });
  const { buttonWidth, buttonRef } = useButtonWidth();

  if (!data) return null;
  return (
    <Popover placement="bottom-end">
      <FilterPopoverButton label={title} buttonRef={buttonRef} />
      <Box zIndex="popover">
        <FilterPopoverContent
          isCancelDisabled={!state.canCancel}
          onClickApply={state.onSubmit}
          onClickCancel={state.onReset}
          buttonWidth={buttonWidth}
        >
          <CheckboxFilter
            hideLabel
            value={state.value}
            onChange={(v) => state.onChange(v)}
            options={data.options}
            showSearch={showSearch}
          />
        </FilterPopoverContent>
      </Box>
    </Popover>
  );
};
