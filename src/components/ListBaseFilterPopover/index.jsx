import { Box, Popover, useMediaQuery } from "@chakra-ui/react";
import { FilterPopoverContent } from "../FilterPopoverContent";
import { FilterPopoverButton } from "../FilterPopoverButton";
import { ListPicker } from "../ListPicker";
import useFilterState from "@/hooks/useFilterState";
import { useButtonWidth } from "@/hooks/useButtonWidth";

export const ListBaseFilterPopover = ({
  title,
  icon,
  isMentorship,
  isSuggestedMentor,
  data,
}) => {
  const state = useFilterState({
    defaultValue: "ریکت",
    onSubmit: console.log,
  });
  const { buttonWidth, buttonRef } = useButtonWidth();
  if (!data) return null;
  return (
    <Popover placement="bottom-end">
      <FilterPopoverButton
        label={title}
        icon={icon}
        isMentorship={isMentorship}
        isSuggestedMentor={isSuggestedMentor}
        buttonRef={buttonRef}
      />
      <Box zIndex="popover">
        <FilterPopoverContent
          isCancelDisabled={!state.canCancel}
          onClickApply={state.onSubmit}
          onClickCancel={state.onReset}
          isListItem={true}
          buttonWidth={buttonWidth}
        >
          <ListPicker
            hideLabel
            value={state.value}
            onChange={(v) => state.onChange(v)}
            options={data?.options}
          />
        </FilterPopoverContent>
      </Box>
    </Popover>
  );
};
