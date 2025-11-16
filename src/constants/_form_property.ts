import {
  EmailAddress,
  NationalCode,
  PhoneCellular,
  PhoneLandline,
  setPassword,
  setUserName,
} from "@/libs/validate";
import { RuleObject } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";

export const _form_property = {
  PlaceHolder: {
    input: "مقدار را وارد کنید",
    textArea: "مقدار را وارد کنید",
    datePicker: "تاریخ را انتخاب کنید",
    select: "انتخاب نمایید",
  },
  rules: (label: string, nextLabel?: string, name?: string) => ({
    required: [
      { required: true, message: errorMessage({ label: label }).required },
    ],
    defaultInput: [
      { required: true, message: errorMessage({ label: label }).required },
      { max: 50, message: errorMessage({ label: label, value: 50 }).max },
      { min: 3, message: errorMessage({ label: label, value: 3 }).min },
    ],
    defaultTextArea: [
      { required: true, message: errorMessage({ label: label }).required },
      { max: 500, message: errorMessage({ label: label, value: 500 }).max },
      { min: 3, message: errorMessage({ label: label, value: 3 }).min },
    ],
    defaultTextEditor: [
      { required: true, message: errorMessage({ label: label }).required },
    ],
    defaultSelect: [
      { required: true, message: errorMessage({ label: label }).required },
    ],
    defaultDatePicker: [
      { required: true, message: errorMessage({ label: label }).required },
    ],

    defaultRadioButton: [
      { required: true, message: errorMessage({ label: label }).required },
    ],

    defaultFileUpload: [
      { required: true, message: errorMessage({ label: label }).requiredFile },
    ],
    defaultCheckBox: [
      {
        require: true,
      },
    ],
    nationalCode: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !NationalCode(value)) {
            callback(errorMessage({ label: label }).notInvalid);
          } else {
            callback();
          }
        },
      },
    ],
    phoneCellular: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !PhoneCellular(value)) {
            callback(errorMessage({ label: label }).notInvalid);
          } else {
            callback();
          }
        },
      },
    ],
    phoneLandline: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !PhoneLandline(value)) {
            callback(errorMessage({ label: label }).notInvalid);
          } else {
            callback();
          }
        },
      },
    ],
    emailAddress: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !EmailAddress(value)) {
            callback(errorMessage({ label: label }).notInvalid);
          } else if (value && value.length > 50) {
            callback(errorMessage({ label: label, value: 50 }).max);
          } else {
            callback();
          }
        },
      },
    ],
    password: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !setPassword(value)) {
            callback(errorMessage({ label: label }).password);
          } else if (value && value.length < 8) {
            callback(errorMessage({ label: label, value: 8 }).min);
          } else if (value && value.length > 50) {
            callback(errorMessage({ label: label, value: 50 }).max);
          } else {
            callback();
          }
        },
      },
    ],
    confirmPassword: [
      { required: true, message: errorMessage({ label: label }).required },
      ({ getFieldValue }: NamePath) => ({
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && getFieldValue(name) !== value) {
            callback(
              errorMessage({ label: label, nextLabel: nextLabel }).confirm
            );
          } else {
            callback();
          }
        },
      }),
    ],
    username: [
      { required: true, message: errorMessage({ label: label }).required },
      {
        validator(
          rule: RuleObject,
          value: any,
          callback: (error?: string) => void
        ) {
          if (value && !setUserName(value)) {
            callback(errorMessage({ label: label }).username);
          } else if (value && value.length < 8) {
            callback(errorMessage({ label: label, value: 8 }).min);
          } else if (value && value.length > 50) {
            callback(errorMessage({ label: label, value: 50 }).max);
          } else {
            callback();
          }
        },
      },
    ],
  }),
};

const errorMessage = (props: {
  label: string;
  nextLabel?: string;
  value?: string | number;
}) => ({
  required: `مقدار ${props.label} الزامی است.`,
  max: `مقدار ${props.label} حداکثر ${props.value} کاراکتر می باشد`,
  min: `مقدار ${props.label} حداقل ${props.value} کاراکتر می باشد`,
  notInvalid: `مقدار ${props.label} نامعتبر است`,
  password: `مقدار ${props.label} می تواند کاراکتر انگلیسی و * ! @ # $ % ^ & * () _ + = : ; ' " ~ باشد.`,
  confirm: `مقدار ${props.label} با ${props.nextLabel} مطابقت ندارد`,
  username: `مقدار ${props.label} میتواند کارکتر انگلیسی و - @ . _  باشد `,
  requiredFile: `${props.label} الزامی است`,
});
