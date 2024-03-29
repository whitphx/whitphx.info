---
title: Find VSCode's undocumented when clause contexts
date: "2023-02-17T01:09:41+09:00"
description:
tags: ["dev"]
---

## Command to get the VSCode's when clause contexts

VSCode has many undocumented [when clause contexts](https://code.visualstudio.com/api/references/when-clause-contexts) that still can be used in the `when` clauses in `keybindings.json`.

You can get the list of when clause contexts including such undocumented ones by running the following steps.

1. Clone the [VSCode repository](https://github.com/microsoft/vscode).
2. Run the command below at the repository root.
   ```shell
   grep -rni -E "RawContextKey(<.*>)?\('.*\)" src/* | sed -E "s/^.*RawContextKey(<.*>)?\(([^)]*)\).*/\2/" | sed -E "s/^.*RawContextKey(<.*>)?\(([^)]*)\).*/\2/" | sed -E "s/'([^']*)'.*/\1/" | uniq | sort
   ```

You can see the result at the bottom of this page.

We can get only the context names with this command, so we have to infer what each one is from its name or by reading the code.

## What it does

It looks like the `RawContextKey` class is used to register the contexts in the VSCode source code, so this command extracts the literal arguments passed to that class.

## Some exceptions

Some arguments passed to `new RawContextKey()` are not literals but variables that the command can't extract, so we have to read the code to get the context names in such cases.

The following command returns all such lines at least.

```shell
grep -rni -E "RawContextKey(<.*>)?\([^'].*\)" src/*
```

## Disclaimer

These are not documented, so not official.

## The result

Here is the list obtained from [VSCode 1.75.0](https://github.com/microsoft/vscode/tree/1.75.0).

```
LinkedEditingInputVisible
acceptSuggestionOnEnter
accessibilityHelpWidgetVisible
accessibilityHelpWidgetVisible
accessibilityModeEnabled
activeAuxiliary
activeEditor
activeEditorAvailableEditorIds
activeEditorCanRevert
activeEditorCanSplitInGroup
activeEditorGroupEmpty
activeEditorGroupIndex
activeEditorGroupLast
activeEditorGroupLocked
activeEditorIsDirty
activeEditorIsFirstInGroup
activeEditorIsLastInGroup
activeEditorIsNotPreview
activeEditorIsPinned
activeEditorIsReadonly
activeLogOutput
activeLogOutput
activeOutputChannel
activePanel
activeViewlet
allWalkthroughsHidden
alwaysShowInlineSuggestionToolbar
atEndOfWord
autoSaveAfterShortDelayContext
auxiliaryBarFocus
auxiliaryBarVisible
bannerFocused
breadcrumbsActive
breadcrumbsPossible
breadcrumbsVisible
breakWhenValueChangesSupported
breakWhenValueIsAccessedSupported
breakWhenValueIsReadSupported
breakpointInputFocused
breakpointItemType
breakpointSupportsCondition
breakpointWidgetVisible
breakpointsExist
breakpointsFocused
builtInExtensions
callHierarchyDirection
callHierarchyVisible
callStackItemStopped
callStackItemType
callStackSessionHasOneThread
callStackSessionIsAttach
canNavigateBack
canNavigateBackInEditLocations
canNavigateBackInNavigationLocations
canNavigateForward
canNavigateForwardInEditLocations
canNavigateForwardInNavigationLocations
canNavigateToLastEditLocation
canNavigateToLastNavigationLocation
canRedo
canReopenClosedEditor
canToggleWordWrap
canUndo
canUndoInlineSuggestion
canViewMemory
cancellableOperation
codeActionMenuVisible
commentEditorFocused
commentIsEmpty
commentThreadIsEmpty
commentsFilterFocus
commentsView.hasComments
commentsView.showResolvedFilter
commentsView.showUnResolvedFilter
currentProfile
customExecutionSupported
customTreeView
debugConfigurationType
debugExtensionAvailable
debugProtocolVariableMenuContext
debugSetExpressionSupported
debugSetVariableSupported
debugState
debugType
debuggerInterestedInActiveEditor
debuggersAvailable
defaultExtensionViews
dirtyDiffVisible
dirtyEditorFocusedInOpenEditors
dirtyWorkingCopies
disassembleRequestSupported
disassemblyViewFocus
downloadUrl
editSessionsShowView
editorAreaVisible
editorColumnSelection
editorFocus
editorHasCallHierarchyProvider
editorHasCodeActionsProvider
editorHasCodeLensProvider
editorHasCompletionItemProvider
editorHasDeclarationProvider
editorHasDefinitionProvider
editorHasDocumentFormattingProvider
editorHasDocumentHighlightProvider
editorHasDocumentSelectionFormattingProvider
editorHasDocumentSymbolProvider
editorHasHoverProvider
editorHasImplementationProvider
editorHasInlayHintsProvider
editorHasMultipleDocumentFormattingProvider
editorHasMultipleDocumentSelectionFormattingProvider
editorHasMultipleSelections
editorHasReferenceProvider
editorHasRenameProvider
editorHasSelection
editorHasSignatureHelpProvider
editorHasTypeDefinitionProvider
editorHasTypeHierarchyProvider
editorHoverVisible
editorIsOpen
editorLangId
editorReadonly
editorSimpleInput
editorTabMovesFocus
editorTabsVisible
editorTextFocus
editorWordWrap
embedderIdentifier
emptyWorkspaceSupport
enterMultiRootWorkspaceSupport
exceptionWidgetVisible
explorerResourceAvailableEditorIds
explorerResourceCut
explorerResourceIsFolder
explorerResourceIsRoot
explorerResourceMoveableToTrash
explorerResourceReadonly
explorerViewletCompressedFirstFocus
explorerViewletCompressedFocus
explorerViewletCompressedLastFocus
explorerViewletFocus
explorerViewletVisible
expressionSelected
extensionHostProfileRecorded
extensionSearchHasText
extensionsSortByValue
fileCopied
fileMatchFocus
fileMatchOrFolderMatchFocus
fileMatchOrFolderMatchWithResourceFocus
fileMatchOrMatchFocus
filesExplorerFocus
findInputFocussed
findWidgetVisible
firstMatchFocus
focusedCustomEditorIsEditable
focusedSessionIsAttach
focusedStackFrameHasInstructionReference
focusedView
folderMatchFocus
folderMatchWithResourceFocus
foldingEnabled
forwardedPortsViewEnabled
groupEditorsCount
groupFocusedInOpenEditors
hasConflicts
hasDebugged
hasGallery
hasInstalledExtensions
hasLocalServer
hasMultipleNewFileEntries
hasNextTabstop
hasOtherSuggestions
hasOutdatedExtensions
hasPrevTabstop
hasProfiles
hasRemoteServer
hasSearchResult
hasSnippetCompletions
hasSymbols
hasWebFileSystemAccess
hasWebServer
hasWordHighlights
inBreakpointWidget
inCompositeEditor
inDebugMode
inDebugRepl
inDiffEditor
inKeybindings
inKeybindingsSearch
inOutput
inOutput
inReferenceSearchEditor
inSearchEditor
inSettingsEditor
inSettingsEditorUserTab
inSettingsJSONEditor
inSettingsSearch
inSnippetMode
inTreeView
inWelcome
inZenMode
inlineSuggestionHasIndentation
inlineSuggestionHasIndentationLessThanTabSize
inlineSuggestionVisible
inputBoxFocus
interactiveInputCursorAtBoundary
interactivePlaygroundFocus
interfaceOverviewVisible
isCenteredLayout
isCurrentProfileTransient
isDevelopment
isExtensionBisectActive
isFileSystemResource
isFullscreen
isIOS
isInEmbeddedEditor
isLinux
isMac
isMacNative
isMergeEditor
isMergeResultEditor
isMobile
isProfileExportInProgress
isProfileImportInProgress
isReadingLineWithInlayHints
isWeb
isWindows
isWorkspaceTrustEnabled
isWorkspaceTrusted
jumpToCursorSupported
keybindingFocus
languageSupportsDisassembleRequest
listDoubleSelection
listFocus
listHasSelectionOrFocus
listMultiSelection
listSelectionNavigation
listSupportsFind
listSupportsMultiselect
loadedScriptsItemType
loadedScriptsSupported
localHistoryItemSelectedForCompare
markersNavigationVisible
matchFocus
mergeEditorBaseUri
mergeEditorLayout
mergeEditorResultUri
mergeEditorShowBase
mergeEditorShowBaseAtTop
mergeEditorShowNonConflictingChanges
messageVisible
multiCursorModifier
multiSessionDebug
multiSessionRepl
multipleEditorGroups
notebookBreakpointMargin
notebookCellEditable
notebookCellEditorFocused
notebookCellExecuting
notebookCellExecutionState
notebookCellFocused
notebookCellHasOutputs
notebookCellInputIsCollapsed
notebookCellLineNumbers
notebookCellListFocused
notebookCellMarkdownEditMode
notebookCellOutputIsCollapsed
notebookCellResource
notebookCellToolbarLocation
notebookCellType
notebookCursorNavigationMode
notebookDiffCellInputChanged
notebookDiffCellPropertyChanged
notebookDiffCellPropertyExpanded
notebookEditable
notebookEditorCursorAtBoundary
notebookEditorFocused
notebookFindWidgetFocused
notebookHasOutputs
notebookHasRunningCell
notebookInterruptibleKernel
notebookKernel
notebookKernelCount
notebookKernelSelected
notebookKernelSourceCount
notebookLastCellFailed
notebookMissingKernelExtension
notebookOutputFocused
notebookType
notebookUseConsolidatedOutputButton
notificationCenterVisible
notificationFocus
notificationToastsVisible
openEditorsFocus
openEditorsVisible
openFolderWorkspaceSupport
openPreviewEnabled
outlineAllCollapsed
outlineFiltersOnType
outlineFollowsCursor
outlineSortMode
panelAlignment
panelFocus
panelMaximized
panelPosition
panelVisible
parameterHintsMultipleSignatures
parameterHintsVisible
patternExcludesInputBoxFocus
patternIncludesInputBoxFocus
portChangable
problemFocus
problems.filter.activeFile
problems.filter.errors
problems.filter.excludedFiles
problems.filter.info
problems.filter.warnings
problemsFilterFocus
problemsViewMode
problemsVisibility
processExecutionSupported
productQualityType
profileSessionState
profiles.enabled
readonlyEditorFocusedInOpenEditors
recommendedExtensions
refactorPreview.enabled
refactorPreview.groupByFile
refactorPreview.hasCategories
refactorPreview.hasCheckedChanges
referenceSearchVisible
relatedInformationFocus
releaseNotesUrl
remoteConnectionState
remoteFileDialogVisible
remoteName
renameInputVisible
replaceActive
replaceInputBoxFocus
replaceInputFocussed
resource
resourceDirname
resourceExtname
resourceFilename
resourceLangId
resourcePath
resourceScheme
resourceSelectedForCompare
resourceSet
restartFrameSupported
scmProvider
scmProviderHasRootUri
scmProviderRootUri
scmRepositoryCount
scmRepositorySortKey
scmRepositoryVisibleCount
scmViewModelAreAllRepositoriesCollapsed
scmViewModelIsAnyRepositoryCollapsible
scmViewModelMode
scmViewModelSortKey
searchBuiltInExtensions
searchDeprecatedExtensions
searchDisabledExtensions
searchEnabledExtensions
searchExtensionUpdates
searchInputBoxFocus
searchInstalledExtensions
searchMarketplaceExtensions
searchOutdatedExtensions
searchRecentlyUpdatedExtensions
searchState
searchUnsupportedWorkspaceExtensions
searchViewletFocus
searchViewletVisible
selectionAnchorSet
serverlessWebContext
settingRowFocus
settingsTocRowFocus
shellExecutionSupported
showPreReleaseVersion
sideBarFocus
sideBarVisible
sideBySideEditorActive
sortByUpdateDate
splitEditorsVertically
stackFrameSupportsRestart
statusBarFocused
stepBackSupported
stepIntoTargetsSupported
suggestWidgetDetailsVisible
suggestWidgetHasFocusedSuggestion
suggestWidgetMultipleSuggestions
suggestWidgetVisible
suggestWidgetVisible
suggestionCanResolve
suggestionHasInsertAndReplaceRange
suggestionInsertMode
suggestionMakesTextEdit
supportedCodeAction
suspendDebuggeeSupported
syncEnabled
syncStatus
taskCommandsRegistered
taskRunning
temporaryWorkspace
terminateDebuggeeSupported
testing.activeEditorHasTests
testing.autoRun
testing.canRefresh
testing.explorerViewMode
testing.explorerViewSorting
testing.hasAnyResults
testing.hasConfigurableProfile
testing.hasCoverableTests
testing.hasDebuggableTests
testing.hasNonDefaultProfile
testing.hasRunnableTests
testing.isContinuousModeOn
testing.isInPeek
testing.isPeekVisible
testing.isRefreshing
testing.isRunning
testing.providerCount
testing.supportsContinuousRun
textCompareEditorActive
textCompareEditorVisible
textInputFocus
timelineExcludeSources
timelineFollowActiveEditor
timelineHasProvider
treeElementCanCollapse
treeElementCanExpand
treeElementHasChild
treeElementHasParent
treeFindOpen
tunnelCloseable
tunnelPrivacy
tunnelPrivacyEnabled
tunnelProtocol
tunnelType
tunnelViewFocus
typeHierarchyDirection
typeHierarchyVisible
updateState
userDataSyncAccountStatus
userDataSyncTurningOn
userHasOpenedNotebook
variableEvaluateNamePresent
variableIsReadonly
variablesFocused
viewHasFilePattern
viewHasReplacePattern
viewHasSearchPattern
viewHasSomeCollapsibleItem
viewHasSomeCollapsibleResult
virtualWorkspace
watchExpressionsExist
watchExpressionsFocused
watchItemType
webviewFindWidgetEnabled
webviewFindWidgetFocused
webviewFindWidgetVisible
whenFocus
workbenchState
workspaceFolderCount
workspacePlatform

```
