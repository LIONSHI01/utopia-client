import styled, { css } from 'styled-components';

const smFontSizeStyles = css`
  font-size: 0.5rem;
`;

const mdFontSizeStyles = css`
  font-size: var(--fs-s);
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  font-size: var(--fs-s);

  .pagination-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: ${({ theme }) => theme.textDark};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: var(--fs-s);
    font-size: 0.5rem;
    min-width: 32px;

    ${(props) => props.fontSize === 'm' && mdFontSizeStyles}
    ${(props) => props.fontSize === 's' && smFontSizeStyles}

    :hover {
      background-color: ${({ theme }) => theme.textLight3};
      color: ${({ theme }) => theme.textPrimary};
      cursor: pointer;
    }

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }

    &.selected {
      color: ${({ theme }) => theme.textPrimary};
      background-color: ${({ theme }) => theme.textLight3};
    }

    .arrow {
      &::before {
        position: relative;
        content: '';

        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;
      color: var(--black-light-3);

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;
