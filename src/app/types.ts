export interface Meeting {
    id:                           string;
    meetingNumber:                string;
    title:                        string;
    agenda:                       string;
    password:                     string;
    phoneAndVideoSystemPassword:  string;
    meetingType:                  string;
    state:                        string;
    timezone:                     string;
    start:                        Date;
    end:                          Date;
    recurrence:                   string;
    hostUserId:                   string;
    hostDisplayName:              string;
    hostEmail:                    string;
    hostKey:                      string;
    siteUrl:                      string;
    webLink:                      string;
    sipAddress:                   string;
    dialInIpAddress:              string;
    enabledAutoRecordMeeting:     boolean;
    allowAnyUserToBeCoHost:       boolean;
    allowFirstUserToBeCoHost:     boolean;
    allowAuthenticatedDevices:    boolean;
    enabledJoinBeforeHost:        boolean;
    joinBeforeHostMinutes:        number;
    enableConnectAudioBeforeHost: boolean;
    excludePassword:              boolean;
    publicMeeting:                boolean;
    reminderTime:                 number;
    enableAutomaticLock:          boolean;
    unlockedMeetingJoinSecurity:  string;
    meetingOptions:               MeetingOptions;
    attendeePrivileges:           { [key: string]: boolean };
    sessionTypeId:                number;
    scheduledType:                string;
    enabledVisualWatermark:       boolean;
    enabledBreakoutSessions:      boolean;
    audioConnectionOptions:       AudioConnectionOptions;
    enabledLiveStream:            boolean;
}

export interface AudioConnectionOptions {
    audioConnectionType:           string;
    enabledTollFreeCallIn:         boolean;
    enabledGlobalCallIn:           boolean;
    enabledAudienceCallBack:       boolean;
    entryAndExitTone:              string;
    allowHostToUnmuteParticipants: boolean;
    allowAttendeeToUnmuteSelf:     boolean;
    muteAttendeeUponEntry:         boolean;
}

export interface MeetingOptions {
    enabledChat:         boolean;
    enabledVideo:        boolean;
    enabledFileTransfer: boolean;
}
