import { EIconName, MbAction, MbIcon } from "mintbase-ui"

export const ExternalButton = ({ text, url }) => {
  return (
    <a href={url} target={'_blank'}  rel="noreferrer noopener">
      <MbAction size="small" type="button">
        <div>
          <span className="whitespace-nowrap">{text}</span>
          <MbIcon
            color={'blue-300'}
            name={EIconName.OPEN_NEW_TAB}
            size="18"
            darkColor="blue-100"
            className="small"
          />
        </div>
      </MbAction>
    </a>
  )
}