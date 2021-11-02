/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BodyClassification, BodySize } from "./components/sux-body/interfaces";
import { ButtonSize, ButtonVariant } from "./components/sux-button/interfaces";
import { CheckboxChangeEventDetail, CheckboxSize, StyleEventDetail } from "./components/sux-checkbox/interfaces";
import { CodeSize } from "./components/sux-code/interfaces";
import { DetailClassification, DetailSize, DetailWeight } from "./components/sux-detail/interfaces";
import { HeadingClassification, HeadingSize, HeadingWeight } from "./components/sux-heading/interfaces";
import { TagSize, TagVariant } from "./components/sux-tag/interfaces";
export namespace Components {
    interface SuxBody {
        /**
          * Classification
         */
        "classification": BodyClassification;
        /**
          * Size
         */
        "size": BodySize;
    }
    interface SuxButton {
        /**
          * is the button disabled
         */
        "disabled"?: boolean;
        /**
          * optionally pass an icon to display at the end of a button - accepts ui icon names
         */
        "iconEnd"?: 'icon-close' | 'icon-open' | 'icon-info';
        /**
          * optionally pass an icon to display at the start of a button - accepts ui icon names
         */
        "iconStart"?: boolean;
        /**
          * optionally add a sux-loader component to the button, disabling interaction.
         */
        "isLoading"?: boolean;
        /**
          * Applies to the aria-label attribute on the button or hyperlink
         */
        "label": string;
        /**
          * The name attribute to apply to the button
         */
        "name"?: string;
        /**
          * Is quiet makes the button appear with least prominence.
         */
        "quiet": boolean;
        /**
          * specify the size of the button, defaults to m
         */
        "size": ButtonSize;
        /**
          * The type attribute to apply to the button
         */
        "type"?: string;
        /**
          * specify the appearance style of the button, defaults to solid.
         */
        "variant": ButtonVariant;
    }
    interface SuxCheckbox {
        /**
          * Toggles checked state of a checkbox
         */
        "checked": boolean;
        /**
          * Disabled
         */
        "disabled": boolean;
        /**
          * Error
         */
        "error": boolean;
        /**
          * Toggles indeterminate state of a checkbox.
         */
        "indeterminate": boolean;
        /**
          * The checkbox name
         */
        "name": string;
        /**
          * quiet
         */
        "quiet": boolean;
        /**
          * Read-onlys
         */
        "readOnly": boolean;
        /**
          * Size
         */
        "size": CheckboxSize;
        /**
          * The checkbox value
         */
        "value": string;
    }
    interface SuxCode {
        /**
          * Size
         */
        "size": CodeSize;
    }
    interface SuxDetail {
        /**
          * Classification
         */
        "classification": DetailClassification;
        /**
          * Size
         */
        "size": DetailSize;
        /**
          * Weight
         */
        "weight": DetailWeight;
    }
    interface SuxHeading {
        /**
          * Heading classification
         */
        "classification": HeadingClassification;
        /**
          * Heading  size
         */
        "size": HeadingSize;
        /**
          * Overwrite Tag
         */
        "tag"?: string;
        /**
          * Heading weight
         */
        "weight": HeadingWeight;
    }
    interface SuxTag {
        /**
          * label for the tag
         */
        "label": string;
        /**
          * Size
         */
        "size": TagSize;
        /**
          * Variant
         */
        "variant": TagVariant;
    }
}
declare global {
    interface HTMLSuxBodyElement extends Components.SuxBody, HTMLStencilElement {
    }
    var HTMLSuxBodyElement: {
        prototype: HTMLSuxBodyElement;
        new (): HTMLSuxBodyElement;
    };
    interface HTMLSuxButtonElement extends Components.SuxButton, HTMLStencilElement {
    }
    var HTMLSuxButtonElement: {
        prototype: HTMLSuxButtonElement;
        new (): HTMLSuxButtonElement;
    };
    interface HTMLSuxCheckboxElement extends Components.SuxCheckbox, HTMLStencilElement {
    }
    var HTMLSuxCheckboxElement: {
        prototype: HTMLSuxCheckboxElement;
        new (): HTMLSuxCheckboxElement;
    };
    interface HTMLSuxCodeElement extends Components.SuxCode, HTMLStencilElement {
    }
    var HTMLSuxCodeElement: {
        prototype: HTMLSuxCodeElement;
        new (): HTMLSuxCodeElement;
    };
    interface HTMLSuxDetailElement extends Components.SuxDetail, HTMLStencilElement {
    }
    var HTMLSuxDetailElement: {
        prototype: HTMLSuxDetailElement;
        new (): HTMLSuxDetailElement;
    };
    interface HTMLSuxHeadingElement extends Components.SuxHeading, HTMLStencilElement {
    }
    var HTMLSuxHeadingElement: {
        prototype: HTMLSuxHeadingElement;
        new (): HTMLSuxHeadingElement;
    };
    interface HTMLSuxTagElement extends Components.SuxTag, HTMLStencilElement {
    }
    var HTMLSuxTagElement: {
        prototype: HTMLSuxTagElement;
        new (): HTMLSuxTagElement;
    };
    interface HTMLElementTagNameMap {
        "sux-body": HTMLSuxBodyElement;
        "sux-button": HTMLSuxButtonElement;
        "sux-checkbox": HTMLSuxCheckboxElement;
        "sux-code": HTMLSuxCodeElement;
        "sux-detail": HTMLSuxDetailElement;
        "sux-heading": HTMLSuxHeadingElement;
        "sux-tag": HTMLSuxTagElement;
    }
}
declare namespace LocalJSX {
    interface SuxBody {
        /**
          * Classification
         */
        "classification"?: BodyClassification;
        /**
          * Size
         */
        "size"?: BodySize;
    }
    interface SuxButton {
        /**
          * is the button disabled
         */
        "disabled"?: boolean;
        /**
          * optionally pass an icon to display at the end of a button - accepts ui icon names
         */
        "iconEnd"?: 'icon-close' | 'icon-open' | 'icon-info';
        /**
          * optionally pass an icon to display at the start of a button - accepts ui icon names
         */
        "iconStart"?: boolean;
        /**
          * optionally add a sux-loader component to the button, disabling interaction.
         */
        "isLoading"?: boolean;
        /**
          * Applies to the aria-label attribute on the button or hyperlink
         */
        "label"?: string;
        /**
          * The name attribute to apply to the button
         */
        "name"?: string;
        /**
          * Is quiet makes the button appear with least prominence.
         */
        "quiet"?: boolean;
        /**
          * specify the size of the button, defaults to m
         */
        "size"?: ButtonSize;
        /**
          * The type attribute to apply to the button
         */
        "type"?: string;
        /**
          * specify the appearance style of the button, defaults to solid.
         */
        "variant"?: ButtonVariant;
    }
    interface SuxCheckbox {
        /**
          * Toggles checked state of a checkbox
         */
        "checked"?: boolean;
        /**
          * Disabled
         */
        "disabled"?: boolean;
        /**
          * Error
         */
        "error"?: boolean;
        /**
          * Toggles indeterminate state of a checkbox.
         */
        "indeterminate"?: boolean;
        /**
          * The checkbox name
         */
        "name"?: string;
        /**
          * Emitted when the checkbox loses focus.
         */
        "onSuxBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the checkbox has focus.
         */
        "onSuxFocus"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the styles change.
         */
        "onSuxStyle"?: (event: CustomEvent<StyleEventDetail>) => void;
        /**
          * Emitted when the checked property has changed.
         */
        "onSuxchange"?: (event: CustomEvent<CheckboxChangeEventDetail>) => void;
        /**
          * quiet
         */
        "quiet"?: boolean;
        /**
          * Read-onlys
         */
        "readOnly"?: boolean;
        /**
          * Size
         */
        "size"?: CheckboxSize;
        /**
          * The checkbox value
         */
        "value"?: string;
    }
    interface SuxCode {
        /**
          * Size
         */
        "size"?: CodeSize;
    }
    interface SuxDetail {
        /**
          * Classification
         */
        "classification"?: DetailClassification;
        /**
          * Size
         */
        "size"?: DetailSize;
        /**
          * Weight
         */
        "weight"?: DetailWeight;
    }
    interface SuxHeading {
        /**
          * Heading classification
         */
        "classification"?: HeadingClassification;
        /**
          * Heading  size
         */
        "size"?: HeadingSize;
        /**
          * Overwrite Tag
         */
        "tag"?: string;
        /**
          * Heading weight
         */
        "weight"?: HeadingWeight;
    }
    interface SuxTag {
        /**
          * label for the tag
         */
        "label"?: string;
        /**
          * Size
         */
        "size"?: TagSize;
        /**
          * Variant
         */
        "variant"?: TagVariant;
    }
    interface IntrinsicElements {
        "sux-body": SuxBody;
        "sux-button": SuxButton;
        "sux-checkbox": SuxCheckbox;
        "sux-code": SuxCode;
        "sux-detail": SuxDetail;
        "sux-heading": SuxHeading;
        "sux-tag": SuxTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sux-body": LocalJSX.SuxBody & JSXBase.HTMLAttributes<HTMLSuxBodyElement>;
            "sux-button": LocalJSX.SuxButton & JSXBase.HTMLAttributes<HTMLSuxButtonElement>;
            "sux-checkbox": LocalJSX.SuxCheckbox & JSXBase.HTMLAttributes<HTMLSuxCheckboxElement>;
            "sux-code": LocalJSX.SuxCode & JSXBase.HTMLAttributes<HTMLSuxCodeElement>;
            "sux-detail": LocalJSX.SuxDetail & JSXBase.HTMLAttributes<HTMLSuxDetailElement>;
            "sux-heading": LocalJSX.SuxHeading & JSXBase.HTMLAttributes<HTMLSuxHeadingElement>;
            "sux-tag": LocalJSX.SuxTag & JSXBase.HTMLAttributes<HTMLSuxTagElement>;
        }
    }
}
