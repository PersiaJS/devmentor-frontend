import { FilterModal } from "@/components/Modal";
import { Divider, FormLabel, Stack } from "@chakra-ui/react";
import CheckboxCustomGroup from "../CheckboxCustomGroup";

export const MoreCheckboxFilter = (props) => {
  const {
    companies,
    settings,
    label,
    hideLabel,
    spacing = "2",
    showSearch,
    data,
    onClickCancel,
    onClickApply,
    isCancelDisabled,
    isOpen,
    onClose,
    overlay,
    ...rest
  } = props;

  return (
    <FilterModal
      isOpen={isOpen}
      onClose={onClose}
      overlay={overlay}
      fontWeight="bold"
    >
      <Stack fontWeight="medium">
        {!hideLabel && (
          <FormLabel fontWeight="semibold" as="legend" mb="0">
            {label}
          </FormLabel>
        )}
        <CheckboxCustomGroup
          title="شرکت ها"
          options={companies.options}
          columns={2}
          {...rest}
        />
        <Divider mb={4} />
        <CheckboxCustomGroup
          title="تنظیمات"
          options={settings.options}
          columns={0}
          {...rest}
        />
      </Stack>
    </FilterModal>
  );
};
