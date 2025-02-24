const { h } = require('preact')

/**
 * Submit recorded video to uppy. Enabled when file is available
 */
module.exports = function SubmitButton ({ recording, recordedVideo, onSubmit, i18n }) {
  if (recordedVideo && !recording) {
    return (
      <button
        className="uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--submit"
        type="button"
        title={i18n('submitRecordedFile')}
        aria-label={i18n('submitRecordedFile')}
        onClick={onSubmit}
        data-uppy-super-focusable
      >
        <svg aria-hidden="true" focusable="false" className="uppy-c-icon" width="48" height="48" viewBox="0 0 48 48">
          <path d="M0 0h48v48h-48z" fill="none" />
          <path d="M38.71 20.07c-1.36-6.88-7.43-12.07-14.71-12.07-5.78 0-10.79 3.28-13.3 8.07-6.01.65-10.7 5.74-10.7 11.93 0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zm-10.71 5.93v8h-8v-8h-6l10-10 10 10h-6z" />
        </svg>
      </button>
    )
  }
  return null
}
